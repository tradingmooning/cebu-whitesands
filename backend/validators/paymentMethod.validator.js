const { z } = require("zod");

const detailFieldSchema = z.object({
  label: z.string().trim().min(1, "Detail label is required").max(100),
  value: z.string().trim().min(1, "Detail value is required").max(500),
  mono: z.boolean().optional().default(false),
});

// Multipart bodies arrive as strings — coerce/parse accordingly.
const paymentMethodSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  details: z.string().optional().default("[]"),
  instructions: z.string().trim().max(2000).optional().default(""),
  isActive: z.string().optional(),
  sortOrder: z.coerce.number().int().optional().default(0),
});

const submissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email is required")
    .max(200)
    .regex(/^\S+@\S+\.\S+$/, "Please enter a valid email"),
  purpose: z.string().trim().min(1, "Please tell us what this is for").max(500),
  bookingRef: z.string().trim().max(50).optional().or(z.literal("")),
});

const updateSubmissionStatusSchema = z.object({
  status: z.enum(["pending", "confirmed", "rejected"]),
  adminNote: z.string().trim().max(1000).optional().or(z.literal("")),
});

module.exports = {
  detailFieldSchema,
  paymentMethodSchema,
  submissionSchema,
  updateSubmissionStatusSchema,
};
