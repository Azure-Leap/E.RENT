import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import supplier from "./Supplier";

const UserSchema = new mongoose.Schema(
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
    phone: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      default: "",
    },
    address: {
      type: String,
    },
    cardNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "supplier"],
      default: "user",
    },
    favProduct: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const user = model("User", UserSchema);

export default user;
