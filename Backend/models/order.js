import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phoneNo: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    selectColor: { type: String },
    selectSize: { type: String },
    price: { type: Number },
    paymentMethod: { type: String, required: true, default: "COD" },
    shippingMethod: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: [
        "Pending",
        "Processing",
        "Shipped",
        "Out for delivery",
        "Delivered",
        "Completed",
      ],
      default: "Pending",
    },
    payment: {
      type: String,
      required: true,
      enum: ["Unpaid", "Paid"],
      default: "Unpaid",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
