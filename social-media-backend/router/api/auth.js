const express = require("express");
const registrationController = require("../../controllers/registrationController");
const _ = express.Router();

_.post("/registration", registrationController);

module.exports = _;
