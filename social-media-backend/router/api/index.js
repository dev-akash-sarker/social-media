const express = require("express");
const _ = express.Router();
const auth = require("./auth");
_.use("/auth", auth);

module.exports = _;
