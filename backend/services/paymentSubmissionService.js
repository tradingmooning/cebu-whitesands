const PaymentSubmission = require("../models/PaymentSubmission");
const Booking = require("../models/Booking");
const PaymentMethod = require("../models/PaymentMethod");
const storage = require("../src/storage/storage");
const AppError = require("../utils/AppError");

const paymentSubmissionService = {
  async create(slug, data, file) {
    if (!file) throw new AppError("Receipt file is required", 400);

    const method = await PaymentMethod.findOne({ slug });
    if (!method) throw new AppError("Payment method not found", 404);
    if (!method.isActive) {
      throw new AppError("This payment method is no longer accepted", 400);
    }

    let matchedBooking;
    if (data.bookingRef) {
      const booking = await Booking.findOne({
        bookingRef: new RegExp(`^${data.bookingRef.trim()}$`, "i"),
      }).select("_id");
      if (booking) matchedBooking = booking._id;
    }

    const result = await storage.uploadFile(file, storage.FOLDERS.RECEIPTS);

    return PaymentSubmission.create({
      paymentMethod: method._id,
      paymentMethodName: method.name,
      name: data.name,
      email: data.email,
      purpose: data.purpose,
      bookingRef: data.bookingRef || undefined,
      matchedBooking,
      receiptUrl: result.url,
      receiptKey: result.key,
    });
  },

  async getAll({ status } = {}) {
    const filter = {};
    if (status) filter.status = status;
    return PaymentSubmission.find(filter)
      .populate("paymentMethod", "name slug")
      .populate("matchedBooking", "bookingRef guestName")
      .sort({ createdAt: -1 });
  },

  async updateStatus(id, status, adminNote) {
    const submission = await PaymentSubmission.findById(id);
    if (!submission) throw new AppError("Submission not found", 404);
    submission.status = status;
    submission.adminNote = adminNote || "";
    await submission.save();
    return submission;
  },

  async delete(id) {
    const submission = await PaymentSubmission.findById(id);
    if (!submission) throw new AppError("Submission not found", 404);
    await storage.deleteFile(submission.receiptKey);
    await submission.deleteOne();
  },
};

module.exports = paymentSubmissionService;
