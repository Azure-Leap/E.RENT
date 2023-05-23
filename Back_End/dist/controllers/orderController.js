"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrder = exports.getAllOrder = void 0;
const Order_1 = __importDefault(require("../models/Order"));
// get all Orders
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order_1.default.find().populate("user");
        if (!orders) {
            res.status(201).json({ message: "Захиалга хоосон байна." });
        }
        res.status(200).json({ message: "Бүх захиалга олдлоо.", orders });
    }
    catch (error) {
        res.status(400).json({
            message: "Захиалгын мэдээлэл авахад алдаа гарлаа",
            error: error.message,
        });
    }
});
exports.getAllOrder = getAllOrder;
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(req.params);
        const order = yield Order_1.default.findById({ _id: id }).populate("user");
        res.status(200).json({ message: "захиалга олдлоо", order });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.getOrder = getOrder;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = req.body;
    try {
        const order = yield Order_1.default.create(newOrder);
        res.status(200).json({ message: "Захиалга амжилттай үүслээ", order });
    }
    catch (error) {
        res.status(400).json({ message: "Алдааны мэдээлэл", error: error.message });
    }
});
exports.createOrder = createOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateOrder = req.body;
    if (!id) {
        res.status(400).json({ message: `${id}-тэй захиалга олдсонгүй` });
    }
    try {
        const order = yield Order_1.default.findByIdAndUpdate(id, updateOrder, { new: true });
        if (!order) {
            res.status(400).json({ message: `${id}-захиалга олдсонгүй` });
        }
        res.status(201).json({
            message: `${id}-тэй захиалганы мэдээлэл амжилттай солигдлоо`,
            order,
        });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id}-тэй захиалга олдсонгүй` });
    }
    try {
        const order = yield Order_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `${id}-тэй захиалга устгагдлаа`, order });
    }
    catch (error) {
        console.log("Алдааны мэдээлэ", error);
    }
});
exports.deleteOrder = deleteOrder;
