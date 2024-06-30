import mongoose from "mongoose";

const venderSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
});

console.log(mongoose.model("vender", venderSchema));

export default mongoose.model("vender", venderSchema);
