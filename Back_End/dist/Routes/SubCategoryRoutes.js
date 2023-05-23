"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subCategory_1 = require("../controllers/subCategory");
const productController_1 = require("../controllers/productController");
const router = express_1.default.Router();
router.route("/").get(subCategory_1.getSubCategories).post(subCategory_1.createSubCategory);
router.route("/:subId/products").get(productController_1.getAllProductByCategory);
router.route("/:id").get(subCategory_1.getSubCategory).put(subCategory_1.updateSubCategory).delete(subCategory_1.deleteSubCategory);
exports.default = router;
