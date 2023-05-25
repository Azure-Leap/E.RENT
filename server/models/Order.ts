import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cart_item: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      enum: ["CREATED", "PROCESSING", "CANCELLED", "COMPLETED"],
      default: "CREATED",
    },
    transactStatus: {
      qty: String,
      status: { type: String, enum: ["PENDING", "SUCCESS"], default: "Pending" },
      amount: {
        type: Number,
      },
    },
    order_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);

export default Order;
