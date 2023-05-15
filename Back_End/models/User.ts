import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
  phoneNumber: {
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
}, { timestamps: true });

const user = model("User", UserSchema);

export default user;
