import express from "express";
import {
  userSignUp,
  userLogIn,
  getCurrentUser,
  userLogout,
} from "../../controllers/User/user.js";
import { validate } from "../../middleware/validate.js";
import { userIsLogIn } from "../../middleware/userIsLogin.js";
import {
  userSignUpZodValidation,
  userLogInZodValidation,
} from "../../validation/userZodValidation.js";

const router = express.Router();

router.get("/auth/me", userIsLogIn, getCurrentUser);

router.post("/signup", validate(userSignUpZodValidation), userSignUp);

router.post("/login", validate(userLogInZodValidation), userLogIn);

router.post("/logout", userLogout);

export default router;
