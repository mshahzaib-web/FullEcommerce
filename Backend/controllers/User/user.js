import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.js";

//Check current user
export const getCurrentUser = (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

//SignUp user
export const userSignUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  const user = await newUser.save();
  res.status(201).json({
    success: true,
    message: "User SignUp Successfully",
  });
});

//LogIn user
export const userLogIn = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Email is Incorrect",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Password is Incorrect",
    });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("userToken", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "User login successfully",
  });
});

// User Logout
export const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("userToken");

  res.status(200).json({
    success: true,
    message: "User Logout Successfully",
  });
});
