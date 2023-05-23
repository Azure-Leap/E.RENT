import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  slug: String,

 

});

const Category = model("Category", categorySchema);

export default Category;
