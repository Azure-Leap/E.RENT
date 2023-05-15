import Supplier from "../models/Supplier";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
const bcrypt = require("bcrypt");


const getSuppliers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Supplier.find();
    res.status(200).json({ message: "Бүх түрээслүүлэгчдийн бүртгэл.", result });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Түрээслүүлэгчдийн  мэдээллийг авахад алдаа гарлаа." });
  }
};

const getSupplier = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} - тай түрээслүүлэгч олдсонгүй.` });
  }
  try {
    const supplier = await Supplier.findById(id);
    res
      .status(201)
      .json({ message: `${id} - тай түрээслүүлэгч олдлоо.`, supplier });
  } catch (err) {
    res
      .status(400)
      .json({ message: `${id} - тай түрээслүүлэгч авах гэтэл алдаа.` });
  }
};

const createSupplier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { supplier_name, supplier_address, supplier_phone, supplier_email , supplier_password, supplier_role} =
    req.body;

  if (
    !supplier_name ||
    !supplier_address ||
    !supplier_phone ||
    !supplier_email ||
    !supplier_role
  ) {
    res
      .status(400)
      .json({
        message: "Нэр, Имэйл, Утасны дугаар эсвэл Нууц үг байхгүй байна.",
      });
  }
  try {
    const supplier = await Supplier.create({
      supplier_name: req.body.supplier_name,
      supplier_address: req.body.supplier_address,
      supplier_phone: req.body.supplier_phone,
      supplier_email: req.body.supplier_email,
      supplier_password: req.body.supplier_password,
      supplier_role: req.body.supplier_role
    });
    res
      .status(201)
      .json({ message: "Шинэ түрээслүүлэгч амжилттай бүртгэгдлээ.", supplier });
  } catch (err) {
    res
      .status(400)
      .json({ err, message: `Шинэ түрээслүүлэгч бүртгэх гэтэл алдаа.` });
  }
};


const updtadeSupplier = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} -тай түрээслүүлэгч олдсонгүй ` });
  }
  try {
    const supplier = await Supplier.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      message: `${id} -тай түрээслүүлэгч өөрчлөгдлөө`,
      supplier,
    });

    
  } catch (err) {
    console.log("алдаа", err);
    
  }
};

const SupplierRegister = async (req: Request, res: Response) => {
  const { supplier_name, supplier_phone, supplier_email, supplier_password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(supplier_password, 10);
    const supplier = await Supplier.create({
      supplier_name,
      supplier_phone,
      supplier_email,
      supplier_password: hashedPassword,
    });
    res.status(200).json({ message: `Түрээслүүлэгч амжилттай бүртгэгдлээ`, supplier });
  } catch (err) {
    console.log("алдаа", err);
  }
};

const SupplierLogin = async (req: Request, res: Response) => {
  const { supplier_email, supplier_password } = req.body;

  console
  const supplierIf = await Supplier.findOne({ supplier_email });
  if (supplierIf) {
    const passOkey = bcrypt.compareSync(supplier_password, supplierIf.supplier_password);

    if (passOkey) {
      const token = jwt.sign({email: supplierIf.supplier_email, id: supplierIf._id}, process.env.JWT_SECRET || "", {expiresIn: 1});
      res.status(200).json({ message: `pass okey`, supplier: supplierIf, token:token });
    } else {
      res.status(400).json({ message: `pass not okey`});
    }
  } else {
    res.status(400).json({ message: `Supplier oldsongui!!` });
  }
}


export { getSuppliers, getSupplier, createSupplier, updtadeSupplier,SupplierRegister,SupplierLogin };
