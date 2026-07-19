import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../../models/admin.js";
import User from "../../models/user.js";

//Get Current Admin
export const getCurrentAdmin = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    admin: req.admin,
  });
});

//Admin SignUp
export const adminSignUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const existAdmin = await Admin.findOne({ email });
  if (existAdmin) {
    return res.status(409).json({
      success: false,
      message:
        "An account with this email already exists. Please log in instead.",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newAdmin = new Admin({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  await newAdmin.save();

  res.status(200).json({
    success: true,
    message: "Admin Signup Successfully",
  });
});

//Admin Login
export const adminLogIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Email is Incorrect",
    });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Password is Incorrect",
    });
  }

  const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("adminToken", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "Admin Login Successfully",
  });
});

//Admin Logout
export const adminLogout = asyncHandler(async (req, res) => {
  res.clearCookie("adminToken");

  res.status(200).json({
    success: true,
    message: "Admin Logout Successfully",
  });
});
