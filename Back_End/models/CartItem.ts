import { Schema, model } from "mongoose";
import { Product } from "./Product";

const productSchema = new Schema({
  product: { type: Object },
  quantity: Number,
  price: Number,
});

const cartItemSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    productList: [productSchema],
    totalPrice: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const CartModel = model("CartList", cartItemSchema);

export default CartModel;
