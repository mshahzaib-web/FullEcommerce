import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: String,

  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      color: {
        type: String,
        trim: true,
      },
      size: {
        type: String,
        trim: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity cannot be less than 1"],
        default: 1,
      },
      addedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
