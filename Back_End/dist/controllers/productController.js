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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getBaraa = exports.getAllProducts = exports.getAllProductByCategory = void 0;
const Product_1 = require("../models/Product");
// idgaar ni buh baraa haruulah
const getAllProductByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { subId } = req.params;
    try {
        const products = yield Product_1.Product.find({ subcategory: subId }).populate("subcategory");
        if (!products) {
            return res.status(201).json({ message: "Бараа хоосон байна." });
        }
        res.status(200).json({ message: "Бүх бараа олдлоо", products });
    }
    catch (error) {
        res.status(400).json({
            message: "Барааны мэдээллийг авахад алдаа гарлаа",
            error: error.message,
        });
    }
    // res.json({ data: products });
});
exports.getAllProductByCategory = getAllProductByCategory;
// get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.query;
    console.log(title);
    try {
        const products = yield Product_1.Product.find({ title: { $regex: title || "" } }).populate("subcategory");
        if (!products) {
            return res.status(201).json({ message: "Бараа хоосон байна." });
        }
        res.status(200).json({ message: "Бүх бараа олдлоо", products });
    }
    catch (error) {
        res.status(400).json({
            message: "Барааны мэдээллийг авахад алдаа гарлаа",
            error: error.message,
        });
    }
});
exports.getAllProducts = getAllProducts;
// export const getProduct = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     console.log(req.params);
//     const product = await Product.findById({ id }).populate("category");
//     res.status(200).json({ success: true, product });
//   } catch (error: any) {
//     console.log("Алдааны мэдээлэл", error.message);
//   }
// };
const getBaraa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id} - тай бараа олдсонгүй.` });
    }
    try {
        const product = yield Product_1.Product.findById(id);
        res.status(200).json({ message: `${id} - тай бараа олдлоо.`, product });
    }
    catch (error) {
        res.status(400).json({ message: "Алдааны мэдээлэл", error: error.message });
    }
});
exports.getBaraa = getBaraa;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(req.params);
        const product = yield Product_1.Product.findById({ _id: id });
        res.status(200).json({ success: true, product });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error.message);
    }
});
exports.getProduct = getProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, imgUrl, subcategory, location, rating, supplier, rent_start_day, rent_finish_day } = req.body;
    // if (!title || !discription || !price || !img || !category || !location || !rating || !supplier || !rent_start_day || !rent_finish_day) {
    //   return res.status(400).json({ messagea: "Мэдээллийг бүрэн оруулна уу" });
    // }
    const newProduct = {
        title,
        price,
        imgUrl,
        location,
        rating,
        description,
        rent_start_day,
        rent_finish_day,
        supplier,
        subcategory,
    };
    try {
        const product = yield Product_1.Product.create(newProduct);
        res.status(200).json({ message: "Бүтээгдэхүүн амжилттай үүслээ", product });
    }
    catch (error) {
        res.status(400).json({ message: "Алдааны мэдээлэл", error: error.message });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id}-тэй бүтээгдэхүүн олдсонгүй` });
    }
    try {
        const product = yield Product_1.Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!product) {
            res.status(400).json({ message: `${id}-бүтээгдэхүүн олдсонгүй` });
        }
        res.status(201).json({
            message: `${id}-тэй бүтээгдэхүүний мэдээлэл амжилттай солигдлоо`,
            product,
        });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id}-тэй бүтээгдэхүүн олдсонгүй` });
    }
    try {
        const product = yield Product_1.Product.findByIdAndDelete(id);
        res.status(201).json({ message: `${id}-тэй бүтээгдэхүүн устгагдлаа`, product });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.deleteProduct = deleteProduct;
