import mongoose from "mongoose";
import "dotenv/config";

const DbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB connected succesfully");
    })
    .catch(() => {
      console.log("Some internal server error occured");
    });
};

export default DbConnect;
