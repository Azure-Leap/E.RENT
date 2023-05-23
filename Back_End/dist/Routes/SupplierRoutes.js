"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supplierControllers_1 = require("../controllers/supplierControllers");
const router = (0, express_1.Router)();
router.route("/register").post(supplierControllers_1.SupplierRegister);
router.route("/login").post(supplierControllers_1.SupplierLogin);
router.route("/").get(supplierControllers_1.getAllSuppliers);
router.route("/:id").get(supplierControllers_1.getSupplier).put(supplierControllers_1.updtadeSupplier).delete(supplierControllers_1.deleteSupplier);
exports.default = router;
