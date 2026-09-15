import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserExistAlready=await userModel.findOne({
    email
  })
  if(isUserExistAlready){
    return res.status(409).json({
      message:"User Already Exist"
    })
  }
  const user = await userModel.create({ username, email, password });


  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token",token)

  res.status(200).json({
    message: "user Register Successfully",
    user,
  });
}

export default { registerUser };
