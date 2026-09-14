import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.create({ username, email, password });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(200).json({
    message: "user Register Successfully",
    user,
    token,
  });
}

export default { registerUser };
