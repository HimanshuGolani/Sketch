import mongoose from "mongoose";
import "dotenv/config";
import debug from "debug";
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
