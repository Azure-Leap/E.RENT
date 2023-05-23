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

const SupplierSchema = new mongoose.Schema({
    supplier_name: {
        type: String,
        required: true
    },
    supplier_address: {
        type: String,
    },
    supplier_phone: {
        type: String,
        required: true
    },
    supplier_email: {
        type: String,
        required: true
    },
    supplier_password: {
        type: String,
        required: true,
    },
    supplierImg: {
        type: String,
        default: "https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
      },
    supplier_role: {
        type: String,
        enum: ["User", "Supplier"],
        default: "User",
    },
    payment_methods: {type: Types.ObjectId, ref: "payment_status" },
    current_order: {type: Types.ObjectId, ref: "order"},
    user_id: { type: Types.ObjectId, ref: "user" },
},  { timestamps: true });

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;
