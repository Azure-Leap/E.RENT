import mongoose from "mongoose";

const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected.");
  } catch (error) {
    console.log("Error", error);
  }
};
export default connectDB;
