import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email }).select("+password");
    console.log("user", user);
    if (!user) {
      return res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    }

    const checkPass = bcrypt.compareSync(req.body.password, user.password);

    if (!checkPass) {
     return res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    }

    const { _id, name, email, role }: any = user;

    const ss = process.env.JWT_SECRET_KEY || "";

    const token = jwt.sign({ id: _id, name, email, role }, ss, {
      expiresIn: 36000,
    });

    res.status(200).json({ message: `Амжилттай нэвтэрлэлээ`, user, token });
  } catch (error) {
    next(error);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, phoneNumber, address, profileImg, cardNumber } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ name, email, phoneNumber, cardNumber, address, profileImg, password: hashedPassword });
    res.status(200).json({ message: `Амжилттай бүртгэгдлэлээ`, user });
  } catch (error) {
    next(error);
  }
};
