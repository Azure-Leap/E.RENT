import express from "express";
import { createCartList, deleteCartItem, getAllCartList, getCartList, updateCartList } from "../controllers/cartItemController";

const router = express.Router();

router.route("/").post(createCartList).get(getAllCartList);
router.route("/carts/:userId").get(getAllCartList);

router.route("/:userId").get(getCartList).put(updateCartList).delete(deleteCartItem);

export default router;
