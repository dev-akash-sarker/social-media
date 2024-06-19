const User = require("../models/userModel");
const { jwToken } = require("../helper/token");
const bcrypt = require("bcrypt");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "The email credential not matched",
      });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({
        message: "invalid credential! please try again",
      });
    }

    const token = jwToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.uName,
      profilePicture: user.profilePicture,
      fName: user.fName,
      lName: user.lName,
      token: token,
      verified: user.verified,
      message: "Login successful",
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports = loginController;
