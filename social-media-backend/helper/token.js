const jwt = require("jsonwebtoken");

exports.jwToken = (payload, expiredIn) => {
  return jwt.sign(payload, process.env.SECRATE_TOKEN, {
    expiresIn: expiredIn,
  });
};
