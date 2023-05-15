import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
