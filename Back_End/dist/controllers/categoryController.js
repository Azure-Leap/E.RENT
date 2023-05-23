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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getAllCategories = void 0;
const Category_1 = __importDefault(require("../models/Category"));
const slugify_1 = __importDefault(require("slugify"));
// get all Categories
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_1.default.find();
        if (!categories) {
            res.status(201).json({ messege: "Категори хоосон байна." });
        }
        res.status(200).json({ message: "Бүх категори олдлоо", categories });
    }
    catch (error) {
        res.status(400).json({
            message: "Категорийн мэдээллийг авахад алдаа гарлаа",
            error: error.message,
        });
    }
});
exports.getAllCategories = getAllCategories;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(req.params);
        const category = yield Category_1.default.findById({ _id: id });
        res.status(200).json({ message: "Категори олдлоо", category });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.getCategory = getCategory;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, imgUrl, type } = req.body;
    if (!title || !description || !imgUrl) {
        return res.status(400).json({ messagea: "Мэдээллийг бүрэн оруулна уу" });
    }
    const newCategory = {
        title,
        description,
        imgUrl,
        type,
        slug: (0, slugify_1.default)(type), //geriin tavilga => geriin-tavilga
    };
    try {
        const category = yield Category_1.default.create(newCategory);
        console.log(category);
        res.status(201).json({ message: "Амжилттай үүслээ", category });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id}-тэй категори олдсонгүй` });
    }
    try {
        const category = yield Category_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!category) {
            res.status(400).json({ message: `${id}-категори олдсонгүй` });
        }
        res.status(201).json({
            message: `${id} - тай категорийн мэдээлэл амжилттай солигдлоо`,
            category,
        });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id}-тэй категори олдсонгүй` });
    }
    try {
        const category = yield Category_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `${id}-тэй категори устгагдлаа`, category });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
    }
});
exports.deleteCategory = deleteCategory;
