const mongoose = require("mongoose");

const paymentSubmissionSchema = new mongoose.Schema(
  {
    paymentMethod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PaymentMethod",
      required: true,
    },
    paymentMethodName: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    purpose: { type: String, required: true, trim: true },
    bookingRef: { type: String, trim: true },
    matchedBooking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    receiptUrl: { type: String, required: true },
    receiptKey: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "rejected"],
      default: "pending",
    },
    adminNote: { type: String, trim: true },
  },
  { timestamps: true },
);

paymentSubmissionSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model("PaymentSubmission", paymentSubmissionSchema);
