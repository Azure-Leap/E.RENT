import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser, getFavProduct } from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/product/fav/:id", getFavProduct);

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
