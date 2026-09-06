const catchAsync = require("../utils/catchAsync");
const paymentMethodService = require("../services/paymentMethodService");
const paymentSubmissionService = require("../services/paymentSubmissionService");
const auditService = require("../services/auditService");

exports.getAllPaymentMethods = catchAsync(async (req, res) => {
  const methods = await paymentMethodService.getAll(req.query);
  res.json({ success: true, data: methods });
});

exports.getPaymentMethodBySlug = catchAsync(async (req, res) => {
  const method = await paymentMethodService.getBySlug(req.params.slug);
  res.json({ success: true, data: method });
});

exports.createPaymentMethod = catchAsync(async (req, res) => {
  const method = await paymentMethodService.create(req.body, req.file);
  auditService.log({
    action: "CREATE_PAYMENT_METHOD",
    entity: "PaymentMethod",
    entityId: method._id,
    adminId: req.admin?.id,
    changes: { name: method.name },
    req,
  });
  res.status(201).json({ success: true, data: method });
});

exports.updatePaymentMethod = catchAsync(async (req, res) => {
  const method = await paymentMethodService.update(
    req.params.id,
    req.body,
    req.file,
  );
  auditService.log({
    action: "UPDATE_PAYMENT_METHOD",
    entity: "PaymentMethod",
    entityId: method._id,
    adminId: req.admin?.id,
    req,
  });
  res.json({ success: true, data: method });
});

exports.togglePaymentMethod = catchAsync(async (req, res) => {
  const method = await paymentMethodService.toggle(req.params.id);
  res.json({
    success: true,
    data: method,
    message: `Payment method ${method.isActive ? "activated" : "deactivated"}`,
  });
});

exports.createSubmission = catchAsync(async (req, res) => {
  const submission = await paymentSubmissionService.create(
    req.params.slug,
    req.body,
    req.file,
  );
  res.status(201).json({ success: true, data: submission });
});
