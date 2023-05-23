"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartItemController_1 = require("../controllers/cartItemController");
const router = express_1.default.Router();
router.route("/").post(cartItemController_1.createCartList).get(cartItemController_1.getAllCartList);
router.route("/carts/:userId").get(cartItemController_1.getAllCartList);
router.route("/:userId").get(cartItemController_1.getCartList).put(cartItemController_1.updateCartList).delete(cartItemController_1.deleteCartItem);
exports.default = router;
