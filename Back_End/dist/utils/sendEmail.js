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
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.GMAIL_USER_EMAIL,
        pass: process.env.GMAIL_USER_PASS,
    },
});
const sendEmail = (name, email, code) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(name, email);
    console.log("form", process.env.GMAIL_USER_EMAIL);
    const info = yield transport.sendMail({
        from: process.env.GMAIL_USER_EMAIL,
        to: email,
        subject: "Email Confirmation Link",
        html: `<h1>Email Confirmation</h1>
        <h2> Сайн байна уу? ${name}</h2>
        <p> Манай вэб хуудсанд бүртгүүлсэнд баярлалаа. Та доорх илгээсэн
         холбоосоор  хэрэглэгчийн эрхээ баталгаажуулна уу!!!</p>
         <a href=http://localhost:9000/confirm/${code}></a>
         Баталгаажуулах холбоос`,
    });
});
exports.default = sendEmail;
