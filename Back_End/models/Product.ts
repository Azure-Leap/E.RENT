import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number },
    imgUrl: [String],
    description: { type: String, required: true },
    rent_start_day: { type: Date, required: true },
    rent_finish_day: { type: Date, required: false },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    name: String,
    product_location: {
      name: String,
      type: {
          type: "String",
          default: "Point",
      },
      coordinates: [Number],
  },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
Product.collection.createIndex({ product_location: "2dsphere" });

export { Product };
