import { Request, Response } from "express";
import SubCategory from "../models/SubCategory";
import slugify from "slugify";

//Sub category create
export const getSubCategories = async (req: Request, res: Response) => {
  try {
    const categories = await SubCategory.find().populate("category");

    res.status(201).json({ success: true, categories });
  } catch (error: any) {
    console.log("Алдааны мэдээлэл", error);
    res.status(400).json({ success: false, message: error });
  }
};

export const getSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = await SubCategory.findById(id);
    if (!category) {
      return res.status(404).json({ success: false, message: `${id}-Дэд категори олдсонгүй` });
    }

    res.status(200).json({ success: true, category });
  } catch (error: any) {
    console.log("Алдааны мэдээлэл", error);
    res.status(400).json({ success: false, message: error });
  }
};

export const createSubCategory = async (req: Request, res: Response) => {
  const { category, title, desc, imgUrl, type }: any = req.body;
  console.log(req.body);

  try {
    const newCategory = await SubCategory.create({ category, title, desc, imgUrl, type, slug: slugify(type) });

    res.status(201).json({ success: true, category: newCategory });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
    res.status(400).json({ success: false, message: error });
  }
};
// subCategory update
export const updateSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedCategory = await SubCategory.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ success: false, message: `${id}-Дэд категори олдсонгүй` });
    }

    res.status(200).json({ message: " Дэд категори амжилттай шинэчлэгдлээ", category: updatedCategory });
  } catch (error: any) {
    console.log("Алдааны мэдээлэл", error);
    res.status(400).json({ success: false, message: error });
  }
};

// subCategory delete
export const deleteSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedCategory = await SubCategory.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ success: false, message: `${id}-Дэд категори олдсонгүй` });
    }

    res.status(200).json({ message: " Дэд категори амжилттай устлаа", category: deletedCategory });
  } catch (error: any) {
    console.log("Алдааны мэдээлэл", error);
    res.status(400).json({ success: false, message: error });
  }
};
