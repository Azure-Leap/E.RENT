import Supplier from "../models/Supplier";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const getAllSuppliers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console
    const supplier = await Supplier.find();
    if (!supplier) {
      res.status(200).json({ message: `Түрээслүүлэгчдийн  мэдээлэл хоосон байна.` });
    }
    res.status(200).json({ message: "Бүх түрээслүүлэгчдийн бүртгэл.", supplier });
  } catch (err) {
    res.status(400).json({ message: "Түрээслүүлэгчдийн  мэдээллийг авахад алдаа гарлаа." });
    next(err);
  }
};

const getSupplier = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} - тай түрээслүүлэгч олдсонгүй.` });
  }
  try {
    const supplier = await Supplier.findById(id);
    res.status(201).json({ message: `${id} - тай түрээслүүлэгч олдлоо.`, supplier });
  } catch (err) {
    res.status(400).json({ message: `${id} - тай түрээслүүлэгч авах гэтэл алдаа.` });
  }
};

const updtadeSupplier = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log("update ajillaa")
  if (!id) {
    res.status(400).json({ message: `${id} -тай түрээслүүлэгч олдсонгүй ` });
  }
  try {
    const supplier = await Supplier.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: `${id} -тай түрээслүүлэгч мэдээлэл өөрчлөгдлөө`,
      supplier,
    });
    if (!supplier) {
      res.status(400).json({ success: `${id} хэрэглэгч олдсонгүй` });
    }
  } catch (err) {
    console.log("ERR", err)
    res
      .status(400)
      .json({ err, message: `Шинэ түрээслүүлэгч бүртгэх гэтэл алдаа.` });
  }
};

const deleteSupplier = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `Йим ${id} ID-тай түрээслүүлэгч олдсонгүй` });
  }
  try {
    const supplier = await Supplier.findByIdAndDelete(id);
    res.status(201).json({ message: `Ийм ${id} ID-тай бизнесийг амжилттай устгалаа`, supplier });
  } catch (err) {
    next(err);
  }
};

const secretKey = process.env.JWT_SECRET_KEY || "";

const SupplierRegister = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, address, profileImg, phone, cardNumber, role } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(String(password), 10);
    const supplier = await Supplier.create({
      name,
      email,
      password: hashedPassword,
      address,
      profileImg,
      phone,
      cardNumber,
      role: "supplier",
    });

    const { id } = supplier;
    const token = jwt.sign({ id }, secretKey, {
      expiresIn: 1200,
    });
    res.status(200).json({ message: `Түрээслүүлэгч амжилттай бүртгэгдлээ`, supplier, token });
  } catch (err) {
    console.log("алдаа", err);
    next(err);
  }
};

const SupplierLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const supplier = await Supplier.findOne({ email: req.body.email }).select("+password");
    if (!supplier) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    } else {
      const checkPass = bcrypt.compareSync(req.body.password, supplier.password.toString());
      if (!checkPass) {
        res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
      }
      const { id } = supplier;
      const token = jwt.sign({ id }, secretKey, { expiresIn: 1200 });
      res.status(200).json({ message: `Амжилттай нэвтэрлээ`, supplier, token });
    }
  } catch (err) {
    next(err);
  }
};
export { getAllSuppliers, getSupplier, updtadeSupplier, SupplierRegister, SupplierLogin, deleteSupplier };
