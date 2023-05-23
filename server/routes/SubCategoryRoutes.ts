import express from "express";
import { createSubCategory, getSubCategories, getSubCategory, updateSubCategory, deleteSubCategory } from "../controllers/subCategory";
import { getAllProductByCategory } from "../controllers/productController";

const router = express.Router();

router.route("/").get(getSubCategories).post(createSubCategory);

router.route("/:subId/products").get(getAllProductByCategory);

router.route("/:id").get(getSubCategory).put(updateSubCategory).delete(deleteSubCategory);

export default router;
