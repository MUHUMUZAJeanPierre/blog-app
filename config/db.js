import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI ="mongodb+srv://jmuhumuza_db_user:9lwptbfnm7kUQtof@cluster0.a9eswmd.mongodb.net/blogDB?retryWrites=true&w=majority";

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
