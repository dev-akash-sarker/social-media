const {
  validateNames,
  verifyEmail,
  validateUsername,
  validateLength,
} = require("../helper/validation");
const bcrypt = require("bcrypt");
const Users = require("../models/userModel");

const registrationController = async (req, res) => {
  try {
    const {
      fName,
      lName,
      uName,
      email,
      password,
      profilePicture,
      cover,
      bMonth,
      bDay,
      bYear,
      gender,
      verified,
    } = req.body;

    if (!verifyEmail(email)) {
      res.status(400).json({
        message: "Invalid email address",
      });
    }

    const existingEmail = await Users.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    if (!validateNames(fName, 3, 15)) {
      return res.status(400).json({
        message: "Firstname should have minimum 3 and max 15 character",
      });
    }

    if (!validateNames(lName, 3, 15)) {
      return res.status(400).json({
        message: "Firstname should have minimum 3 and max 15 character",
      });
    }

    if (!validateLength(password, 8, 15)) {
      return res.status(400).json({
        message: "Password should be minimum 8 characters",
      });
    }

    // bcrypt-password
    const crypted = await bcrypt.hash(password, 10);
    // validate username
    const tempUsername = fName + lName;
    const finalUsername = await validateUsername(tempUsername);

    const User = await new Users({
      fName: fName,
      lName: lName,
      uName: finalUsername,
      email: email,
      password: crypted,
      profilePicture: profilePicture,
      cover: cover,
      bMonth: bMonth,
      bDay: bDay,
      bYear: bYear,
      gender: gender,
      verified: verified,
    }).save();
    res.send(User);
  } catch (err) {
    res.status(404).json({
      message: "Can not create user",
    });
  }
};

module.exports = registrationController;
