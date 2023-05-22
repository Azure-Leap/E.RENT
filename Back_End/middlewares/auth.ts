import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import user from "../models/User";
import Supplier from "../models/Supplier";

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(400).json({ message: "nevtreegui baina" });
  }
  const token = req.headers?.authorization?.split(" ")[1] || "";
  const supplier = jwt.verify(token, process.env.JWT_SECRET_KEY || "");
  console.log(supplier);
  if (!supplier) {
    res.status(400).json({ message: "Ene token huchingui baina" });
  }
  next();
};

const authorization = (...role: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(role);
    // if (!req.headers.authorization) {
    //   res.status(400).json({ message: "Token yavuulaagui baina." });
    // }
    // const token = req.headers?.authorization?.split(" ")[1] || "";
    // const supplier = jwt.verify(token, process.env.JWT_SECRET || "");
    // console.log(supplier);
    // if (!supplier) {
    //   res.status(400).json({ message: "Ene token huchingui baina." });
    // }
    // if (!user.role.includes(user.role)) {
    //   res.status(400).json({ message: `Tani ${user.role} erh ene uildliig hiihed hurehgui baina.` });
    // }
    next();
  };
};
export { checkLogin, authorization };
