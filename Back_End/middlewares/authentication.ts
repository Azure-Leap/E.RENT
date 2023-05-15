// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";

// export const checkLogin = (req: Request, res: Response, next: NextFunction) => {
//   if (!req.headers.authorization) {
//     res.status(400).json({ message: "Токен явуулаагүй байна." });
//   }
//   const token = req.headers.authorization?.split("")[1] || "";
//   const ss = process.env.JWT_SECRET_KEY || "";
//   const user = jwt.verify(token, ss);
//   console.log(user);

//   if (!user) {
//     res.status(400).json({ message: "Энэ токен хүчингүй байна." });
//   }
//   next();
// };

// export const authorization = (...roles) => {
//   console.log("AUTH", roles);
//   return (req: Request, res: Response, next: NextFunction) => {
//     if (!req.headers.authorization) {
//       res.status(400).json({ message: "Энэ токен хүчингүй байна." });
//     }
//     const token = req.headers.authorization?.split("")[1];
//     const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     console.log(user);

//     if (!roles.includes(user.role)) {
//       res.status(400).json({ message: `Таны ${user.role} эрх энэ үйлдлийг хийх эрх хүрэхгүй байна` });
//     }
//     next();
//   };
// };
