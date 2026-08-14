import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

import errorHandler from "./middleware/errorHandler.js";

import adminRoutes from "./routes/Admin/adminRoutes.js";
import productRoutes from "./routes/Product/productRoutes.js";
import userRoutes from "./routes/User/userRoutes.js";

connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// Routes

app.use("/admin", adminRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

// app.use("/api/users", userRoutes);

// Error Handler (Always keep this LAST)
app.get("/check", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Azure deployment is working correctly!",
    timestamp: new Date().toISOString(),
  });
});
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
