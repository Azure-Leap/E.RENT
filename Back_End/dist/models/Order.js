"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    cart_item: {
        type: Object,
        required: true,
    },
    status: {
        type: String,
        enum: ["CREATED", "PROCESSING", "CANCELLED"],
        default: "CREATED",
    },
    transactStatus: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: "Payment_status",
    },
    order_date: {
        type: Date,
    },
}, { timestamps: true });
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
