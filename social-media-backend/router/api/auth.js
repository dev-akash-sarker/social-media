const express = require("express");
const registrationController = require("../../controllers/registrationController");
const verifedController = require("../../controllers/verifiedController");
const loginController = require("../../controllers/loginController");
const _ = express.Router();

_.post("/registration", registrationController);
_.post("/activate", verifedController);
_.post("/login", loginController);

module.exports = _;
