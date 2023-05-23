import { Router } from "express";
import { getAllSuppliers, getSupplier, updtadeSupplier, SupplierRegister, SupplierLogin, deleteSupplier } from "../controllers/supplierControllers";

const router = Router();

router.route("/register").post(createSupplier);
router.route("/login").post(SupplierLogin);

router.route("/").get(getAllSuppliers);
router.route("/:id").get(getSupplier).put(updtadeSupplier).delete(deleteSupplier);

export default router;
