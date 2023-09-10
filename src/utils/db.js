import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nextblog");
    mongoose.set('strictQuery', true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('strictQuery', false); // Suppress the warning

    console.log("MongoDB Connected")
  } catch (error) {
    throw new Error("MongoDB Connection failed!");
  }
};

export default connect;
