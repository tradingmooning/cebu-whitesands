const catchAsync = require("../utils/catchAsync");
const paymentSubmissionService = require("../services/paymentSubmissionService");
const auditService = require("../services/auditService");

exports.getAllSubmissions = catchAsync(async (req, res) => {
  const submissions = await paymentSubmissionService.getAll(req.query);
  res.json({ success: true, data: submissions });
});

exports.updateSubmissionStatus = catchAsync(async (req, res) => {
  const submission = await paymentSubmissionService.updateStatus(
    req.params.id,
    req.body.status,
    req.body.adminNote,
  );
  auditService.log({
    action: "UPDATE_PAYMENT_SUBMISSION_STATUS",
    entity: "PaymentSubmission",
    entityId: submission._id,
    adminId: req.admin?.id,
    changes: { status: submission.status },
    req,
  });
  res.json({ success: true, data: submission });
});

exports.deleteSubmission = catchAsync(async (req, res) => {
  await paymentSubmissionService.delete(req.params.id);
  auditService.log({
    action: "DELETE_PAYMENT_SUBMISSION",
    entity: "PaymentSubmission",
    entityId: req.params.id,
    adminId: req.admin?.id,
    req,
  });
  res.json({ success: true, message: "Submission deleted" });
});
