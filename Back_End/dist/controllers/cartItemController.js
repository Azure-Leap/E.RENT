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
exports.deleteCartItem = exports.updateCartList = exports.createCartList = exports.getCartList = exports.getAllCartList = void 0;
const CartItem_1 = __importDefault(require("../models/CartItem"));
// get all CartList
const getAllCartList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        console.log("UID", userId);
        const cartItems = yield CartItem_1.default.find({ user: userId });
        console.log("UIDCL", cartItems);
        if (!cartItems) {
            return res.status(201).json({ message: "Карт хоосон байна." });
        }
        res.status(200).json({ message: "Бүх карт олдлоо.", cartItems });
    }
    catch (error) {
        res.status(400).json({
            message: "Картны мэдээлэл авахад алдаа гарлаа",
            error: error.message,
        });
    }
});
exports.getAllCartList = getAllCartList;
const getCartList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("EE+>>>>>", req.params);
    try {
        const { userId } = req.params;
        const cartItem = yield CartItem_1.default.findOne({ user: userId });
        res.status(200).json({ message: "Карт олдлоо", cartItem });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.getCartList = getCartList;
// add CartList
const createCartList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // try {
    const { cartItems, userId } = req.body;
    console.log("back", cartItems);
    const niilberShirheg = (_a = cartItems === null || cartItems === void 0 ? void 0 : cartItems.productList) === null || _a === void 0 ? void 0 : _a.reduce((acc, item) => acc + item.quantity, 0);
    console.log("shirheg", niilberShirheg);
    const niilberUne = (_b = cartItems === null || cartItems === void 0 ? void 0 : cartItems.productList) === null || _b === void 0 ? void 0 : _b.reduce((acc, item) => acc + item.quantity * item.price, 0);
    console.log("Niit Une", niilberUne);
    const cartLists = yield CartItem_1.default.findOne({ user: userId });
    //   console.log(cartList);
    if (cartLists) {
        console.log("PLUPDATE", cartItems);
        // productList: [productSchema],
        // totalPrice: { type: Number, required: true },
        // totalQuantity: { type: Number, required: true },
        const up = yield CartItem_1.default.findOneAndUpdate({ user: userId }, {
            user: userId,
            productList: cartItems.productList,
            totalPrice: niilberUne,
            totalQuantity: niilberShirheg,
        }, { new: true });
        return res.status(201).json({ success: true, cartList: up });
    }
    if (!cartLists) {
        console.log("PLNEW", cartItems);
        const cartItem = yield CartItem_1.default.create({ user: userId, productList: cartItems, totalPrice: niilberUne, totalQuantity: niilberShirheg });
        return res.status(201).json({ success: true, cartList: cartItem });
    }
    //   if (!cartList) {
    //     console.log("NEW", p);
    //     const totalPrice = p.price;
    //     const totalQuantity = p.quantity;
    //     console.log(totalPrice);
    //     console.log(totalQuantity);
    //     const newCartList = await CartModel.create({
    //       user: userId,
    //       productList: [p],
    //       totalPrice,
    //       totalQuantity,
    //     });
    //     res.status(201).json({ success: true, cartList: newCartList });
    //   } else {
    //     console.log("RENEW", p);
    //     cartList.productList.push(p);
    //     const newPrice = cartList.productList.reduce((sum, el: any) => el.price + sum, 0);
    //     const newQuantity = cartList.productList.reduce((sum, el: any) => el.quantity + sum, 0);
    //     cartList.totalPrice = newPrice;
    //     cartList.totalQuantity = newQuantity;
    //     const newCartList = await cartList.save();
    //     res.status(201).json({ success: true, cartList: newCartList });
    //   }
    // } catch (error) {
    //   console.log("E", error);
    // }
});
exports.createCartList = createCartList;
// update CartList
const updateCartList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    //   console.log("params", req.params);
    const { id, quantity } = req.body;
    console.log("req.body", req.body);
    console.log("pid", id);
    console.log("quantity", quantity);
    try {
        const cartList = yield CartItem_1.default.findOne({ user: userId });
        if (!cartList) {
            return res.status(404).json({ message: "Хэрэглэгчийн карт олдохгүй байна." });
        }
        // console.log("pppp", cartList.productList);
        const index = cartList.productList.findIndex((product) => product._id.toString() === id);
        console.log("index:", index);
        if (index < 0) {
            // -1 > 0
            return res.status(404).json({ message: "Карт байхгүй байна." });
        }
        cartList.productList[index].quantity = Number(quantity);
        cartList.productList[index].price = cartList.productList[index].quantity * cartList.productList[index].product.price;
        cartList.productList.set(index, cartList.productList[index]);
        console.log("CP", cartList);
        const newPrice = cartList.productList.reduce((updateP, el) => el.price + updateP, 0);
        const newQuantity = cartList.productList.reduce((updateP, el) => el.quantity + updateP, 0);
        console.log("NP", newPrice);
        console.log("NQ", newQuantity);
        cartList.totalPrice = newPrice;
        cartList.totalQuantity = newQuantity;
        const nCartList = yield cartList.save();
        res.status(200).json({ message: "Карт шинэчлэгдлэлээ", cartList: nCartList });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.updateCartList = updateCartList;
const deleteCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const { id } = req.params;
    const { userId } = req.body;
    try {
        const cartList = yield CartItem_1.default.findOne({ user: userId });
        if (!cartList) {
            return res.status(404).json({ message: "Хэрэглэгчийн карт олдохгүй байна." });
        }
        const index = cartList.productList.findIndex((product) => product.product._id == id);
        if (!index) {
            return res.status(404).json({ message: "Карт байхгүй байна." });
        }
        //olson index deerh product iig ustgana.
        console.log("IDX", id);
        cartList.productList.pull({
            _id: id,
        });
        console.log("CC", cartList);
        const newPrice = cartList.productList.reduce((sum, el) => el.price + sum, 0);
        const newQuantity = cartList.productList.reduce((sum, el) => el.quantity + sum, 0);
        cartList.totalPrice = newPrice;
        cartList.totalQuantity = newQuantity;
        const nCartList = yield cartList.save();
        res.status(200).json({ success: true, cartList: nCartList });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.deleteCartItem = deleteCartItem;
