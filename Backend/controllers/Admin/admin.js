import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../../models/admin.js";
import User from "../../models/user.js";
import Product from "../../models/product.js";
import Order from "../../models/order.js";
import Review from "../../models/review.js";
import Cart from "../../models/cart.js";
import Wishlist from "../../models/wishlist.js";
import { success } from "zod";

//Get Current Admin
export const getCurrentAdmin = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    admin: req.admin,
  });
});

//Get admin information
export const getAdminInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const adminInfo = await Admin.findById(id);
  res.status(200).json({
    success: true,
    message: "Admin Info Get",
    adminInfo,
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
        "An account with this email already exists. Please login instead.",
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
      message: "Email is Incorrect OR SignUp First",
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
// get admin dashbord data
export const getAdminDashboardData = asyncHandler(async (req, res) => {
  const { adminId } = req.admin;

  //products data
  const totalProducts = await Product.countDocuments({ owner: adminId });

  const healthyStock = await Product.find({
    owner: adminId,
    stock: { $gte: 20 },
  });

  const lowStock = await Product.find({
    owner: adminId,
    stock: { $gt: 0, $lt: 20 },
  });

  const outOfStock = await Product.find({
    owner: adminId,
    stock: 0,
  });

  //orders data
  const totalOrders = await Order.countDocuments({ owner: adminId });

  const pendingOrders = await Order.countDocuments({
    owner: adminId,
    status: "Pending",
  });
  const processingOrders = await Order.countDocuments({
    owner: adminId,
    status: "Processing",
  });

  const deliveredOrders = await Order.countDocuments({
    owner: adminId,
    status: "Delivered",
  });

  const unpaidOrders = await Order.countDocuments({
    owner: adminId,
    payment: "Unpaid",
  });

  const paidOrders = await Order.countDocuments({
    owner: adminId,
    payment: "Paid",
  });

  res.status(200).json({
    success: true,
    message: "Admin Dashborad Data get",
    products: {
      totalProducts,
      healthyStock: healthyStock.length,
      lowStock: lowStock.length,
      outOfStock: outOfStock.length,
    },
    orders: {
      totalOrders,
      pendingOrders,
      processingOrders,
      deliveredOrders,
      unpaidOrders,
      paidOrders,
    },
  });
});

// Get admin orders
export const getAdminOrders = asyncHandler(async (req, res) => {
  const { adminId } = req.admin;
  const { search, searchPayment, searchStatus } = req.query;

  const query = {
    owner: adminId,
  };

  if (search && search != "") {
    query.$or = [
      {
        firstName: {
          $regex: search,
          $options: "i",
        },
      },
      {
        lastName: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  if (searchPayment && searchPayment != "All Payments") {
    query.payment = searchPayment;
  }

  if (searchStatus && searchStatus != "All Statuses") {
    query.status = searchStatus;
  }

  const adminOrders = await Order.find(query).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    message: "Admin Order Get",
    orders: adminOrders,
  });
});

// get admin order details information
export const getAdminOrderDetailsInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { adminId } = req.admin;

  const orderDetails = await Order.find({ owner: adminId, _id: id }).populate(
    "product",
    "name mainImage",
  );

  res.status(200).json({
    success: true,
    message: "Admin Order Details Info Get",
    orderInfo: orderDetails,
  });
});

//Update order status and payment
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { adminId } = req.admin;
  const { status, payment } = req.body;

  const updateOrder = await Order.findOneAndUpdate(
    { _id: id, owner: adminId },
    {
      status: status,
      payment: payment,
    },
    {
      returnDocument: true,
    },
  );

  if (!updateOrder) {
    return res.status(404).json({
      success: false,
      message: "Oder Status & Payment not Update Successfully",
    });
  }

  res.status(200).json({
    success: true,
    message: "Order Status & Payment Update Successfully",
  });
});

//Delete the order by admin after complete the order
export const adminDeleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { adminId } = req.admin;

  const deleteOrder = await Order.findOneAndDelete({ _id: id, owner: adminId });

  if (!deleteOrder) {
    return res.status(400).json({
      success: false,
      message: "Order Not Delete Successfully",
    });
  }

  res.status(200).json({
    success: true,
    message: "Order Delete Successfully",
  });
});

//Admin delete the product
export const adminDeleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { adminId } = req.admin;

  const deleteProduct = await Product.findOneAndDelete({
    _id: id,
    owner: adminId,
  });

  if (!deleteProduct) {
    return res.status(400).json({
      success: false,
      message: "Product Not Deleted",
    });
  }

  const deleteProductReviews = await Review.deleteMany({ product: id });

  const deleteProductFromWishlist = await Wishlist.updateMany(
    { "wishlist.product": id },
    {
      $pull: {
        wishlist: { product: id },
      },
    },
    { returnDocument: "after" },
  );

  const deleteProductFromCart = await Cart.updateMany(
    { "cart.product": id },
    {
      $pull: {
        cart: { product: id },
      },
    },
    { returnDocument: "after" },
  );
  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});
