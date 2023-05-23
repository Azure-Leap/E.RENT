"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const CategoryRoutes_1 = __importDefault(require("./routes/CategoryRoutes"));
const SubCategoryRoutes_1 = __importDefault(require("./routes/SubCategoryRoutes"));
const mongoDB_1 = require("./config/mongoDB");
const cloudinary_1 = __importDefault(require("./utils/cloudinary"));
const ProductRoutes_1 = __importDefault(require("./routes/ProductRoutes"));
const OrderRoutes_1 = __importDefault(require("./routes/OrderRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const supplierRoutes_1 = __importDefault(require("./routes/supplierRoutes"));
const sendEmail_1 = __importDefault(require("./utils/sendEmail"));
const cartListRoutes_1 = __importDefault(require("./routes/cartListRoutes"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));
app.get("/", (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const r = yield (0, sendEmail_1.default)("Muugii", "azure.munkhtsetseg.urtnasan@gmail.com", "batalgaajuulah code");
    }
    catch (err) {
        console.log("first");
    }
}));
app.post("/upload", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("REQ:", req.files.image);
    const result = yield cloudinary_1.default.v2.uploader.upload(req.files.image.tempFilePath, { folder: "E.RENT" });
    res.status(200).json({ message: "Амжилттай хадгаллаа.", imgUrl: result.secure_url });
    console.log("====>", result);
}));
app.get("/", (req, res) => {
    res.send("file");
});
app.use("/uploads", express_1.default.static("uploads"));
// connect Routes
app.use("/categories", CategoryRoutes_1.default);
app.use("/subcategories", SubCategoryRoutes_1.default);
app.use("/products", ProductRoutes_1.default);
app.use("/orders", OrderRoutes_1.default);
app.use("/users", userRoutes_1.default);
app.use("/supplier", supplierRoutes_1.default);
app.use("/auth", authRoutes_1.default);
app.use("/carts", cartListRoutes_1.default);
const MONGO_URI = process.env.MONGO || "";
(0, mongoDB_1.connectDB)(MONGO_URI);
app.listen(9000, () => {
    console.log(`Server is runnig at ${9000} port`);
});
