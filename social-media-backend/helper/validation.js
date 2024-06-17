const userModel = require("../models/userModel");
const User = require("../models/userModel");

exports.validateNames = (text, min, max) => {
  if (text?.length < min || text?.length > max) {
    return false;
  } else {
    return true;
  }
};

exports.validateLength = (text, min, max) => {
  if (text.length < min || text.length > max) {
    return false;
  } else {
    return true;
  }
};

exports.verifyEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

exports.validateUsername = async (username) => {
  let isTrue = false;
  do {
    let user = await userModel.findOne({ uName: username });

    if (user) {
      username += (+new Date() * Math.random()).toString().substring(0, 1);
      isTrue = true;
    } else {
      isTrue = false;
    }
  } while (isTrue);

  return username;
};
