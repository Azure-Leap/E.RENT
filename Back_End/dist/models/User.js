"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_2.default.Schema({
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
}, { timestamps: true });
const user = (0, mongoose_1.model)("User", UserSchema);
exports.default = user;
