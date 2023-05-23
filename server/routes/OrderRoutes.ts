import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getOrder,
  updateOrder,
} from "../controllers/orderController";

const router = express.Router();

router.get("/", getAllOrder);
router.post("/", createOrder);
router.get("/:id", getOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
