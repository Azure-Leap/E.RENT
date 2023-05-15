import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number },
    imgUrl: [String],
    // location: {
    //   type: {
    //     type: String,
    //     default: "Point",
    //   },
    //   coordinates: [Number],
    // },
    // rating: {
    //   type: Number,
    //   min: 1,
    //   max: 5,
    //   required: true,
    // },
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
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
Product.collection.createIndex({ product_location: "2dsphere" });

export { Product };
