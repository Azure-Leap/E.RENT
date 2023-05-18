import { Router } from "express";
import { UserLogin, UserRegister, createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController";

const router = Router();


router.route("/register").post(UserRegister);
router.route("/login").post(UserLogin);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;