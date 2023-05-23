"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    product: { type: Object },
    quantity: Number,
    price: Number,
});
const cartItemSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    productList: [productSchema],
    totalPrice: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
}, { timestamps: true });
const CartModel = (0, mongoose_1.model)("CartList", cartItemSchema);
exports.default = CartModel;
