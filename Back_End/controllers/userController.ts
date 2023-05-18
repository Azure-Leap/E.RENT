import { NextFunction, Request, Response } from "express";
const bcrypt = require("bcrypt");
import User from "../models/User";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(201).json({ message: "Түрээслэгч байхгүй байна." });
    }
    res.status(200).json({ message: "Түрээслэгчийн мэдээлэл олдлоо", users });
  } catch (error: any) {
    res.status(400).json({
      message: "Түрээслэгч мэдээллийг авахад алдаа гарлаа",
      error: error.message,
    });
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} - тай түрээслэгч олдсонгүй.` });
  }
  try {
    const user = await User.findById(id);
    res
      .status(201)
      .json({ message: `${id} - тай түрээслэгч олдлоо.`, user });
  } catch (err) {
    res
      .status(400)
      .json({ message: `${id} - тай түрээслэгч авах гэтэл алдаа.` });
  }

  //   if (!user) {
  //     res.status(400).json({ message: `${id}-тэй хэрэглэгч олдохгүй байна.` });
  //   }
  //   res.status(200).json({ message: `${id}-тэй хэрэглэгч олдлоо`, user });
  // } catch (error: any) {
  //   next(error);
  //   console.log("алдаатай мэдээлэл", error.message);
  // }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, phoneNumber, address, cardNumber } = req.body;
  
  if (!name || !email || !phoneNumber || !password) {
    res
      .status(400)
      .json({
        message: "Нэр, Имэйл, Утасны дугаар эсвэл Нууц үг байхгүй байна.",
      });
    }
    try {
      const user = await User.create({
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password
      });
      res
        .status(201)
        .json({ message: "Шинэ түрээслэгч амжилттай бүртгэгдлээ.", user });
    } catch (err) {
      res
        .status(400)
        .json({ err, message: `Шинэ түрээслэгч бүртгэх гэтэл алдаа.` });
    }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} хэрэглэгч олдсонгүй` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(400).json({ success: `${id} хэрэглэгч олдсонгүй` });
    }
    res.status(200).json({
      message: `${id}-тэй хэрэглэгч шинэчлэгдлээ`,
      user,
    });
  } catch (error) {
    next(error);
    console.log("алдаа", error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} түрээслэгч олдсонгүй` });
  }
  try {
    const user = await User.findByIdAndDelete({ id });
    res.status(201).json({ message: `${id} түрээслэгч устлаа`, user });
  } catch (error) {
    console.log("алдаа", error);
  }
};

export const UserRegister = async (req: Request, res: Response) => {
  const { name, phoneNumber, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
    });
    res.status(200).json({ message: `Түрээслүүлэгч амжилттай бүртгэгдлээ`, user });
  } catch (err) {
    console.log("алдаа", err);
  }
};

export const UserLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console
  const userIf = await User.findOne({ email });
  if (userIf) {
    const passOkey = bcrypt.compareSync(password, userIf.password);
    if (passOkey) {
      res.status(200).json({ message: `pass okey`, user: userIf });
    } else {
      res.status(400).json({ message: `pass not okey`, user:userIf });
    }
  } else {
    res.status(400).json({ message: `User oldsongui!!` });
  }
}

