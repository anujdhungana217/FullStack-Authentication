import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (err) {
    console.error("database COnnection Error", err);
  }
}
export default connectDB;
