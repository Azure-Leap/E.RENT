"use strict";
// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// // import user from "../models/User";
// // import supplier from "../models/Supplier";
// export const checkLogin = (req: Request, res: Response, next: NextFunction) => {
//   const role="";
//   if (!req.headers.authorization) {
//     res.status(400).json({ message: "Токен явуулаагүй байна." });
//   }
//   const token = req.headers.authorization?.split("")[1] || "";
//   const ss = process.env.JWT_SECRET_KEY || "";
//   const user = jwt.verify(token, ss);
//   console.log(user);
//   // if (user.role!=="supplier") {
//   //   res.status(400).json({ message: "Энэ үйлдлийг хийх эрхгүй байна." });
//   // }
// };
// export const authorization = (...roles:any) => {
//   console.log("AUTH", roles);
//   return (req: Request, res: Response, next: NextFunction) => {
//     if(req.headers.authorization) {
//       res.status(400).json({message:"Токен явуулаагүй байна"})
//     }
//     const token = req.headers.authorization?.split("")[1] || "";
//     const user: any = jwt.verify(token, process.env.JWT_SECRET_KEY || "");
//     console.log(user);
//     if (!user) {
//       res.status(400).json({ message: "Энэ токен хүчингүй байна." });
//     }
//     if (!roles.includes(user.role)) {
//       res.status(400).json({ message: `Таны ${user.role} эрх энэ үйлдлийг хийх эрх хүрэхгүй байна` });
//     }
//     next();
//   };
// };
