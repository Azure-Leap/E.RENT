"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.get("/", productController_1.getAllProducts);
router.post("/", auth_1.checkLogin, (0, auth_1.authorization)("Supplier"), productController_1.createProduct);
// router.get("/:id", getProduct);
router.get("/:id", productController_1.getBaraa);
router.put("/:id", productController_1.updateProduct);
router.delete("/:id", productController_1.deleteProduct);
exports.default = router;
