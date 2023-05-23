"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = exports.checkLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkLogin = (req, res, next) => {
    var _a, _b;
    if (!req.headers.authorization) {
        res.status(400).json({ message: "nevtreegui baina" });
    }
    const token = ((_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1]) || "";
    const supplier = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY || "");
    console.log(supplier);
    if (!supplier) {
        res.status(400).json({ message: "Ene token huchingui baina" });
    }
    next();
};
exports.checkLogin = checkLogin;
const authorization = (...role) => {
    return (req, res, next) => {
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
exports.authorization = authorization;
