import { z } from "zod";

export const productValidation = z.object({
  name: z.string().min(1, "Product name must be at least 3 characters"),

  sku: z.string().min(1, "SKU is required"),

  category: z.string().min(1, "Category is required"),

  brand: z.string().optional(),

  description: z.string().min(10, "Description must be at least 10 characters"),

  price: z.coerce.number().positive("Price must be greater than 0"),

  stock: z.coerce
    .number()
    .int("Stock must be an integer")
    .min(0, "Stock is required"),

  color: z.array(z.string()).optional(),

  size: z.array(z.string()).optional(),

  mainImage: z.object({
    url: z.string().url("Invalid main image URL"),
    public_id: z.string().min(1, "Main image public_id is required"),
  }),

  subImages: z
    .array(
      z.object({
        url: z.string().url("Invalid sub image URL"),
        public_id: z.string().min(1, "Sub image public_id is required"),
      }),
    )
    .max(5, "Maximum 5 sub images"),
});

export const productReviewValidation = z.object({
  rating: z
    .number()
    .min(1, "Minimum 1 star rating requaired")
    .max(5, "Maximum Rating is 5"),

  comment: z.string().min(1, "Commit is required"),
});
