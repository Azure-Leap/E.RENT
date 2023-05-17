const jwt = require("jsonwebtoken");
import { NextFunction, Request, Response } from "express";
import Supplier from "../models/Supplier";

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        res.status(400).json({ message: "nevtreegui baina" })
    }
    const token = req.headers?.authorization?.split(" ")[1] || "";
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(user);
    if (!user) {
        res.status(400).json({ message: "Ene token huchingui baina" });
    }
    next();
};

const authorization = (...supplier_role:any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.headers.authorization) {
            res.status(400).json({ message: "Token yavuulaagui baina." });
        }
        const token = req.headers?.authorization?.split(" ")[1] || "";
        const supplier = jwt.verify(token, process.env.JWT_SECRET);
        console.log(supplier);
        if (!supplier) {
            res.status(400).json({ message: "Ene token huchingui baina." });
        }
        if (!supplier_role.includes(supplier.supplier_role)) {
            res.status(400).json({ message: `Tani ${supplier_role} erh ene uildliig hiihed hurehgui baina.`, });
        }
        next();
    }
}
export { checkLogin, authorization };