import { Schema, model,Types } from "mongoose";
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
  user_id: { type: Types.ObjectId, ref: "user" },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
