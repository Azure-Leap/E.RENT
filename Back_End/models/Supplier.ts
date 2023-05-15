import mongoose, { Schema, Types } from "mongoose";


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
