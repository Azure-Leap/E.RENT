import { Request, Response } from "express";
import Order from "../models/Order";
// get all Orders
export const getAllOrder = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("user");
    if (!orders) {
      res.status(201).json({ message: "Захиалга хоосон байна." });
    }
    res.status(200).json({ message: "Бүх захиалга олдлоо.", orders });
  } catch (error: any) {
    res.status(400).json({
      message: "Захиалгын мэдээлэл авахад алдаа гарлаа",
      error: error.message,
    });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const order = await Order.findById({ _id: id }).populate("user");
    res.status(200).json({ message: "захиалга олдлоо", order });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const newOrder = req.body;
  try {
    const order = await Order.create(newOrder);
    res.status(200).json({ message: "Захиалга амжилттай үүслээ", order });
  } catch (error: any) {
    res.status(400).json({ message: "Алдааны мэдээлэл", error: error.message });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateOrder = req.body;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй захиалга олдсонгүй` });
  }
  try {
    const order = await Order.findByIdAndUpdate(id, updateOrder, { new: true });
    if (!order) {
      res.status(400).json({ message: `${id}-захиалга олдсонгүй` });
    }
    res.status(201).json({
      message: `${id}-тэй захиалганы мэдээлэл амжилттай солигдлоо`,
      order,
    });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй захиалга олдсонгүй` });
  }
  try {
    const order = await Order.findByIdAndDelete(id);
    res.status(201).json({ message: `${id}-тэй захиалга устгагдлаа`, order });
  } catch (error) {
    console.log("Алдааны мэдээлэ", error);
  }
};
