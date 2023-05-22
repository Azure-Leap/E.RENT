import express from "express";
import { login, register } from "../controllers/authentication";
// import { checkLogin,authorization } from "../middlewares/authentication";
// import {getAllUsers} from "../controllers/userController"

const router = express.Router();

router.post("/login",login);
router.post("/register",register);
// router.route("/").get(checkLogin,authorization("User"),getAllUsers)
// router.post("/forget");

export default router;
