import { Request, Response } from "express";
import Category from "../models/Category";
import slugify from "slugify";

// get all Categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      res.status(201).json({ messege: "Категори хоосон байна." });
    }
    res.status(200).json({ message: "Бүх категори олдлоо", categories });
  } catch (error: any) {
    res.status(400).json({
      message: "Категорийн мэдээллийг авахад алдаа гарлаа",
      error: error.message,
    });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const category = await Category.findById({ _id: id });
    res.status(200).json({ message: "Категори олдлоо", category });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};
export const createCategory = async (req: Request, res: Response) => {
  const { title, description, imgUrl, type } = req.body;

  if (!title || !description || !imgUrl) {
    return res.status(400).json({ messagea: "Мэдээллийг бүрэн оруулна уу" });
  }
  const newCategory = {
    title,
    description,
    imgUrl,
    type,
    slug: slugify(type), //geriin tavilga => geriin-tavilga
  };
  try {
    const category = await Category.create(newCategory);
    console.log(category);
    res.status(201).json({ message: "Амжилттай үүслээ", category });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй категори олдсонгүй` });
  }
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!category) {
      res.status(400).json({ message: `${id}-категори олдсонгүй` });
    }
    res.status(201).json({
      message: `${id} - тай категорийн мэдээлэл амжилттай солигдлоо`,
      category,
    });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй категори олдсонгүй` });
  }
  try {
    const category = await Category.findByIdAndDelete(id);
    res.status(201).json({ message: `${id}-тэй категори устгагдлаа`, category });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};
