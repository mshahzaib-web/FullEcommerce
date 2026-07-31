import { z } from "zod";

export const cartProductValidation = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phoneNo: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  zipCode: z.number({ invalid_type_error: "Zip code must be a number" }),

  paymentMethod: z.string().min(1, "Payment method is required"),
  shippingMethod: z.string().min(1, "Shipping method is required"),
});
