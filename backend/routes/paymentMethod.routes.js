const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const validate = require("../middleware/validate");
const { paymentSubmissionLimiter } = require("../middleware/rateLimiter");
const {
  paymentMethodSchema,
  submissionSchema,
} = require("../validators/paymentMethod.validator");
const {
  getAllPaymentMethods,
  getPaymentMethodBySlug,
  createPaymentMethod,
  updatePaymentMethod,
  togglePaymentMethod,
  createSubmission,
} = require("../controllers/paymentMethodController");

// Public
router.get("/", getAllPaymentMethods);
router.get("/:slug", getPaymentMethodBySlug);
router.post(
  "/:slug/submissions",
  paymentSubmissionLimiter,
  upload.single("receipt"),
  validate(submissionSchema),
  createSubmission,
);

// Admin only
router.post(
  "/",
  auth,
  upload.single("logo"),
  validate(paymentMethodSchema),
  createPaymentMethod,
);
router.put(
  "/:id",
  auth,
  upload.single("logo"),
  validate(paymentMethodSchema),
  updatePaymentMethod,
);
router.patch("/:id/toggle", auth, togglePaymentMethod);

module.exports = router;
