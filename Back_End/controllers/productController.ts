import { Request, Response } from "express";
import { Product } from "../models/Product";

// idgaar ni buh baraa haruulah
export const getAllProductByCategory = async (req: Request, res: Response) => {
  const { subId } = req.params;

  try {
    const products = await Product.find({ subcategory: subId }).populate("subcategory");
    if (!products) {
      return res.status(201).json({ message: "Бараа хоосон байна." });
    }
    res.status(200).json({ message: "Бүх бараа олдлоо", products });
  } catch (error: any) {
    res.status(400).json({
      message: "Барааны мэдээллийг авахад алдаа гарлаа",
      error: error.message,
    });
  }

  // res.json({ data: products });
};

// get all products

export const getAllProducts = async (req: Request, res: Response) => {
  const { title } = req.query;
  console.log(title);
  try {
    const products = await Product.find({ title: { $regex: title } }).populate("subcategory");
    if (!products) {
      return res.status(201).json({ message: "Бараа хоосон байна." });
    }
    res.status(200).json({ message: "Бүх бараа олдлоо", products });
  } catch (error: any) {
    res.status(400).json({
      message: "Барааны мэдээллийг авахад алдаа гарлаа",
      error: error.message,
    });
  }
};

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

export const getBaraa = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} - тай бараа олдсонгүй.` });
  }
  try {
    const product = await Product.findById(id);
    res.status(200).json({ message: `${id} - тай бараа олдлоо.`, product });
  } catch (error: any) {
    res.status(400).json({ message: "Алдааны мэдээлэл", error: error.message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const product = await Product.findById({ _id: id });
    res.status(200).json({ success: true, product });
  } catch (error: any) {
    console.log("Алдааны мэдээлэл", error.message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
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
    const product = await Product.create(newProduct);
    res.status(200).json({ message: "Бүтээгдэхүүн амжилттай үүслээ", product });
  } catch (error: any) {
    res.status(400).json({ message: "Алдааны мэдээлэл", error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй бүтээгдэхүүн олдсонгүй` });
  }
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!product) {
      res.status(400).json({ message: `${id}-бүтээгдэхүүн олдсонгүй` });
    }
    res.status(201).json({
      message: `${id}-тэй бүтээгдэхүүний мэдээлэл амжилттай солигдлоо`,
      product,
    });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй бүтээгдэхүүн олдсонгүй` });
  }
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(201).json({ message: `${id}-тэй бүтээгдэхүүн устгагдлаа`, product });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};
