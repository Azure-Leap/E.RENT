"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const user = yield User_1.default.findOne({ email: req.body.email }).select("+password");
        console.log("user", user);
        if (!user) {
            return res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
        }
        const checkPass = bcrypt_1.default.compareSync(req.body.password, user.password);
        if (!checkPass) {
            return res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
        }
        const { _id, name, email, role } = user;
        const ss = process.env.JWT_SECRET_KEY || "";
        const token = jsonwebtoken_1.default.sign({ id: _id, name, email, role }, ss, {
            expiresIn: 36000,
        });
        res.status(200).json({ message: `Амжилттай нэвтэрлэлээ`, user, token });
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phone, address, profileImg, cardNumber, role } = req.body;
    const data = req.body;
    if (data) {
        const oldUser = yield User_1.default.findOne({ email: data.email });
        if (oldUser) {
            return res.status(400).json({ success: false, status: "Хэрэглэгч аль хэдийн үүссэн байна. Нэвтэрч орно уу." });
        }
    }
    try {
        const hashedPassword = bcrypt_1.default.hashSync(password, 10);
        const user = yield User_1.default.create({ name, email, phone, cardNumber, address, profileImg, role, password: hashedPassword });
        res.status(200).json({ message: `Амжилттай бүртгэгдлэлээ`, user });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
