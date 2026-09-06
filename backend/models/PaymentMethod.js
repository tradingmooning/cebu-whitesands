const mongoose = require("mongoose");

const detailFieldSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
    mono: { type: Boolean, default: false },
  },
  { _id: false },
);

const paymentMethodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    logoUrl: String,
    logoKey: String,
    details: [detailFieldSchema],
    instructions: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

paymentMethodSchema.index({ isActive: 1, sortOrder: 1 });

module.exports = mongoose.model("PaymentMethod", paymentMethodSchema);
