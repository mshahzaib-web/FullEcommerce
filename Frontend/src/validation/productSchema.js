import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name must be at least 3 characters"),

  sku: z.string().min(1, "SKU is required"),

  category: z.string().min(1, "Category is required"),

  brand: z.string().optional(),

  description: z.string().min(10, "Description must be at least 10 characters"),

  price: z.string().min(1, "Price is required"),

  stock: z.string().min(1, "Stock is required"),

  color: z.array(z.string()).optional(),

  size: z.array(z.string()).optional(),
});
