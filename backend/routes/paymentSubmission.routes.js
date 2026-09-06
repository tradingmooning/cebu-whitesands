const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");
const {
  updateSubmissionStatusSchema,
} = require("../validators/paymentMethod.validator");
const {
  getAllSubmissions,
  updateSubmissionStatus,
  deleteSubmission,
} = require("../controllers/paymentSubmissionController");

// Admin only
router.get("/", auth, getAllSubmissions);
router.patch(
  "/:id/status",
  auth,
  validate(updateSubmissionStatusSchema),
  updateSubmissionStatus,
);
router.delete("/:id", auth, deleteSubmission);

module.exports = router;
