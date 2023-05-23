"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../controllers/authentication");
// import { checkLogin,authorization } from "../middlewares/authentication";
// import {getAllUsers} from "../controllers/userController"
const router = express_1.default.Router();
router.post("/login", authentication_1.login);
router.post("/register", authentication_1.register);
// router.route("/").get(checkLogin,authorization("User"),getAllUsers)
// router.post("/forget");
exports.default = router;
