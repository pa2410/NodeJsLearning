import { User } from "../Models/User.js";

export const userRegister = async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.json({
      message: "User Created Successfully...!",
      newUser: user,
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: error.message,
      fail: false,
    });
  }
};
