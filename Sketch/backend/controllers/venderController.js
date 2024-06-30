import venderModel from "../models/vender-model.js";

const createVender = async (req, res) => {
  try {
    let owner = await venderModel.find();
    // if the owner exists..
    if (owner.length > 0) {
      return res
        .status(503)
        .send("You dont have the permission to create a new owner.");
    }

    let { fullname, email, password } = req.body;

    await owner.create({
      fullname,
      email,
      password,
    });
    res
      .status(201)
      .send({ owner: owner, message: "Owner created Succesfully." });
  } catch (error) {}
};
