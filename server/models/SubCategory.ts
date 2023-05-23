import { Schema, model } from "mongoose";

const subCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  type: String,
  slug: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const SubCategory = model("SubCategory", subCategorySchema);

export default SubCategory;
