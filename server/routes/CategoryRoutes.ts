import express from "express";
import { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController";

const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);

router.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory);

export default router;
