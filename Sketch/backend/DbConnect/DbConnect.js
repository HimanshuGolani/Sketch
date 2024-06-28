import mongoose from "mongoose";

const DbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => {
      console.log("DB connected succesfully");
    })
    .catch(() => {
      console.log("Some internal server error occured");
    });
};

export default DbConnect;
