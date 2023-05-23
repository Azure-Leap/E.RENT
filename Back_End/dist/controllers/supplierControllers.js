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
exports.deleteSupplier = exports.SupplierLogin = exports.SupplierRegister = exports.updtadeSupplier = exports.getSupplier = exports.getAllSuppliers = void 0;
const Supplier_1 = __importDefault(require("../models/Supplier"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getAllSuppliers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console;
        const supplier = yield Supplier_1.default.find();
        if (!supplier) {
            res.status(200).json({ message: `Түрээслүүлэгчдийн  мэдээлэл хоосон байна.` });
        }
        res.status(200).json({ message: "Бүх түрээслүүлэгчдийн бүртгэл.", supplier });
    }
    catch (err) {
        res.status(400).json({ message: "Түрээслүүлэгчдийн  мэдээллийг авахад алдаа гарлаа." });
        next(err);
    }
});
exports.getAllSuppliers = getAllSuppliers;
const getSupplier = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `${id} - тай түрээслүүлэгч олдсонгүй.` });
    }
    try {
        const supplier = yield Supplier_1.default.findById(id);
        res.status(201).json({ message: `${id} - тай түрээслүүлэгч олдлоо.`, supplier });
    }
    catch (err) {
        res.status(400).json({ message: `${id} - тай түрээслүүлэгч авах гэтэл алдаа.` });
    }
});
exports.getSupplier = getSupplier;
const updtadeSupplier = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    console.log("update ajillaa");
    if (!id) {
        res.status(400).json({ message: `${id} -тай түрээслүүлэгч олдсонгүй ` });
    }
    try {
        const supplier = yield Supplier_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: `${id} -тай түрээслүүлэгч мэдээлэл өөрчлөгдлөө`,
            supplier,
        });
        if (!supplier) {
            res.status(400).json({ success: `${id} хэрэглэгч олдсонгүй` });
        }
    }
    catch (err) {
        next(err);
        console.log("алдаа", err);
    }
});
exports.updtadeSupplier = updtadeSupplier;
const deleteSupplier = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: `Йим ${id} ID-тай түрээслүүлэгч олдсонгүй` });
    }
    try {
        const supplier = yield Supplier_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `Ийм ${id} ID-тай бизнесийг амжилттай устгалаа`, supplier });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSupplier = deleteSupplier;
const secretKey = process.env.JWT_SECRET_KEY || "";
const SupplierRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, address, profileImg, phone, cardNumber, role } = req.body;
    try {
        const hashedPassword = bcrypt_1.default.hashSync(String(password), 10);
        const supplier = yield Supplier_1.default.create({
            name,
            email,
            password: hashedPassword,
            address,
            profileImg,
            phone,
            cardNumber,
            role: "supplier",
        });
        const { id } = supplier;
        const token = jsonwebtoken_1.default.sign({ id }, secretKey, {
            expiresIn: 1200,
        });
        res.status(200).json({ message: `Түрээслүүлэгч амжилттай бүртгэгдлээ`, supplier, token });
    }
    catch (err) {
        console.log("алдаа", err);
        next(err);
    }
});
exports.SupplierRegister = SupplierRegister;
const SupplierLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supplier = yield Supplier_1.default.findOne({ email: req.body.email }).select("+password");
        if (!supplier) {
            res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
        }
        else {
            const checkPass = bcrypt_1.default.compareSync(req.body.password, supplier.password.toString());
            if (!checkPass) {
                res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
            }
            const { id } = supplier;
            const token = jsonwebtoken_1.default.sign({ id }, secretKey, { expiresIn: 1200 });
            res.status(200).json({ message: `Амжилттай нэвтэрлээ`, supplier, token });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.SupplierLogin = SupplierLogin;
