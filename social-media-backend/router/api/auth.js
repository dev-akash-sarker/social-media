const express = require("express");
const registrationController = require("../../controllers/registrationController");
const _ = express.Router();

_.get("/registration", registrationController);

module.exports = _;
