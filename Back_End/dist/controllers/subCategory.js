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
exports.deleteSubCategory = exports.updateSubCategory = exports.createSubCategory = exports.getSubCategory = exports.getSubCategories = void 0;
const SubCategory_1 = __importDefault(require("../models/SubCategory"));
const slugify_1 = __importDefault(require("slugify"));
//Sub category create
const getSubCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield SubCategory_1.default.find().populate("category");
        res.status(201).json({ success: true, categories });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
        res.status(400).json({ success: false, message: error });
    }
});
exports.getSubCategories = getSubCategories;
const getSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield SubCategory_1.default.findById(id);
        if (!category) {
            return res.status(404).json({ success: false, message: `${id}-Дэд категори олдсонгүй` });
        }
        res.status(200).json({ success: true, category });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
        res.status(400).json({ success: false, message: error });
    }
});
exports.getSubCategory = getSubCategory;
const createSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, title, desc, imgUrl, type } = req.body;
    console.log(req.body);
    try {
        const newCategory = yield SubCategory_1.default.create({ category, title, desc, imgUrl, type, slug: (0, slugify_1.default)(type) });
        res.status(201).json({ success: true, category: newCategory });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
        res.status(400).json({ success: false, message: error });
    }
});
exports.createSubCategory = createSubCategory;
// subCategory update
const updateSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedCategory = yield SubCategory_1.default.findByIdAndUpdate(id, Object.assign({}, req.body), { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ success: false, message: `${id}-Дэд категори олдсонгүй` });
        }
        res.status(200).json({ message: " Дэд категори амжилттай шинэчлэгдлээ", category: updatedCategory });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
        res.status(400).json({ success: false, message: error });
    }
});
exports.updateSubCategory = updateSubCategory;
// subCategory delete
const deleteSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedCategory = yield SubCategory_1.default.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ success: false, message: `${id}-Дэд категори олдсонгүй` });
        }
        res.status(200).json({ message: " Дэд категори амжилттай устлаа", category: deletedCategory });
    }
    catch (error) {
        console.log("Алдааны мэдээлэл", error);
        res.status(400).json({ success: false, message: error });
    }
});
exports.deleteSubCategory = deleteSubCategory;
