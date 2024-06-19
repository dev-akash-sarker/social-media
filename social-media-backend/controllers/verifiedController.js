const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifedController = async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.SECRATE_TOKEN);
    const checkVerify = await User.findById(user.id);
    if (checkVerify.verified === true) {
      return res.status(400).json({
        message: "This email is already verified.",
      });
    } else {
      await User.findByIdAndUpdate(user.id, { verified: true });
      return res.status(200).json({
        message: "Account has been activated successfully",
      });
    }

    console.log(token);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = verifedController;
