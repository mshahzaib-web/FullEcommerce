import { z } from "zod";

export const userSignUpZodValidation = z.object({
  firstName: z.string().min(1, "First Name is Required"),
  lastName: z.string().min(1, "Last Name is Required"),
  email: z.string().min(1, "Email is Required"),
  password: z.string().min(1, "Password must at least 6 digit"),
});

export const userLogInZodValidation = z.object({
  email: z.string().min(1, "Email is Required"),
  password: z.string().min(1, "Password is Required"),
});
