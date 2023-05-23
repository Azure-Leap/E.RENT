import { NextFunction, Request, Response } from "express";
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
  console.log(req.params);
  if (!id) {
    res.status(400).json({ message: `${id} -хоосон байна.` });
  }
  try {
    const user = await User.findById({ _id: id });
    if (!user) {
      res.status(400).json({ message: `${id}-тэй хэрэглэгч олдохгүй байна.` });
    }
    res.status(200).json({ message: `${id}-тэй хэрэглэгч олдлоо`, user });
  } catch (error: any) {
    next(error);
    console.log("алдаатай мэдээлэл", error.message);
  }
};

// export const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   const { name, email, password, phoneNumber, profileImg, address, cardNumber } = req.body;

//   try {
//     const isExist = await User.find(email);

//     if (isExist) {
//       return res.status(200).json({ success: false, message: "Бүртгэлтэй хэрэглэгч байна." });
//     }

//     const newUser = {
//       name,
//       email,
//       password,
//       phoneNumber,
//       profileImg,
//       address,
//       cardNumber,
//     };
//     const user = await User.create(newUser);
//     console.log(user);
//     res.status(201).json({ success: true, message: "Амжилттай бүртгэлээ", user });
//   } catch (error) {
//     console.log("Алдааны мэдээлэл", error);
//   }
// };

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
