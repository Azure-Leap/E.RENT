import mongoose, { Schema, model } from "mongoose";

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ["supplier", "user"],
      default: "user",
    },
    payment_methods: { type: mongoose.Schema.Types.ObjectId, ref: "payment_status" },
    current_order: { type: mongoose.Schema.Types.ObjectId, ref: "order" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

const supplier = model("Supplier", SupplierSchema);
export default supplier;
