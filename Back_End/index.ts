import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import CategoryRoutes from "./Routes/CategoryRoutes";
import SubCategoryRoutes from "./Routes/SubCategoryRoutes";
import { connectDB } from "./config/mongoDB";
import upload from "./middlewares/upload";
import cloudinary from "./utils/cloudinary";
import ProductRoutes from "./routes/ProductRoutes";
import OrderRoutes from "./routes/OrderRoutes";
import UserRoutes from "./routes/userRoutes";
import SupplierRoutes from "./routes/SupplierRoutes";
import sendEmail from "./utils/sendEmail";

import cartListRoutes from "./Routes/cartListRoutes";
import fileUpload from "express-fileupload";
import authRoutes from "./Routes/authRoutes";
const app = express();

app.use(cors());
app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/", async (res: Response, req: Request) => {
  try {
    const r = await sendEmail("Muugii", "azure.munkhtsetseg.urtnasan@gmail.com", "batalgaajuulah code");
  } catch (err) {
    console.log("first");
  }
});

app.post("/upload", async (req: any, res: Response) => {
  console.log("REQ:", req.files.image);
  const result = await cloudinary.v2.uploader.upload(req.files.image.tempFilePath, { folder: "E.RENT" });
  res.status(200).json({ message: "Амжилттай хадгаллаа.", imgUrl: result.secure_url });
  console.log("====>", result);
});
app.get("/", (req: Request, res: Response) => {
  res.send("TEST-API");
});

app.use("/uploads", express.static("uploads"));

// connect Routes
app.use("/categories", CategoryRoutes);
app.use("/subcategories", SubCategoryRoutes);
app.use("/products", ProductRoutes);
app.use("/orders", OrderRoutes);
app.use("/users", UserRoutes);
app.use("/supplier", SupplierRoutes);
app.use("/auth", authRoutes);

const MONGO_URI = process.env.MONGO || "";
connectDB(MONGO_URI);

app.listen(9000, () => {
  console.log(`Server is runnig at ${9000} port`);
});
