/**
 * One-off migration: creates PaymentMethod documents from the legacy
 * singleton PaymentDetails (bank + GCash fields) so the dynamic checkout
 * flow has real methods to show instead of going blank.
 *
 * Safe to re-run — skips any slug ("bank-transfer"/"gcash") that already
 * exists. Does NOT touch or delete the old PaymentDetails document.
 *
 * Usage: node backend/scripts/migratePaymentSettingsToMethods.js
 */

require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const PaymentDetails = require("../models/PaymentSettings");
const PaymentMethod = require("../models/PaymentMethod");

(async () => {
  await connectDB();

  const details = await PaymentDetails.findOne();
  if (!details) {
    console.log("No legacy PaymentDetails document found — nothing to migrate.");
    await mongoose.disconnect();
    return;
  }

  const candidates = [];

  if (details.bankName && details.accountNumber) {
    candidates.push({
      slug: "bank-transfer",
      name: details.bankName,
      details: [
        { label: "Bank", value: details.bankName },
        { label: "Account name", value: details.accountName },
        { label: "Account number", value: details.accountNumber, mono: true },
      ],
      instructions: details.instructions || "",
      isActive: true,
      sortOrder: 0,
    });
  }

  if (details.gcashNumber) {
    candidates.push({
      slug: "gcash",
      name: "GCash",
      details: [
        { label: "GCash name", value: details.gcashName },
        { label: "GCash number", value: details.gcashNumber, mono: true },
      ].filter((d) => d.value),
      instructions: details.gcashInstructions || "",
      isActive: true,
      sortOrder: 1,
    });
  }

  if (candidates.length === 0) {
    console.log("Legacy PaymentDetails has no bank or GCash info to migrate.");
    await mongoose.disconnect();
    return;
  }

  for (const candidate of candidates) {
    const existing = await PaymentMethod.findOne({ slug: candidate.slug });
    if (existing) {
      console.log(`Skipping "${candidate.slug}" — already exists.`);
      continue;
    }
    const created = await PaymentMethod.create(candidate);
    console.log(`✓ Created payment method "${created.name}" (/payment/${created.slug})`);
  }

  await mongoose.disconnect();
})();
