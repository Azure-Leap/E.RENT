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
exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        if (!users) {
            return res.status(201).json({ message: "Түрээслэгч байхгүй байна." });
        }
        res.status(200).json({ message: "Түрээслэгчийн мэдээлэл олдлоо", users });
    }
    catch (error) {
        res.status(400).json({
            message: "Түрээслэгч мэдээллийг авахад алдаа гарлаа",
            error: error.message,
        });
    }
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(req.params);
    if (!id) {
        res.status(400).json({ message: `${id} -хоосон байна.` });
    }
    try {
        const user = yield User_1.default.findById({ _id: id });
        if (!user) {
            res.status(400).json({ message: `${id}-тэй хэрэглэгч олдохгүй байна.` });
        }
        res.status(200).json({ message: `${id}-тэй хэрэглэгч олдлоо`, user });
    }
    catch (error) {
        next(error);
        console.log("алдаатай мэдээлэл", error.message);
    }
});
exports.getUser = getUser;
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
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id} хэрэглэгч олдсонгүй` });
    }
    try {
        const user = yield User_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!user) {
            res.status(400).json({ success: `${id} хэрэглэгч олдсонгүй` });
        }
        res.status(200).json({
            message: `${id}-тэй хэрэглэгч шинэчлэгдлээ`,
            user,
        });
    }
    catch (error) {
        next(error);
        console.log("алдаа", error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id} түрээслэгч олдсонгүй` });
    }
    try {
        const user = yield User_1.default.findByIdAndDelete({ id });
        res.status(201).json({ message: `${id} түрээслэгч устлаа`, user });
    }
    catch (error) {
        console.log("алдаа", error);
    }
});
exports.deleteUser = deleteUser;
