const express = require("express");
const _ = express.Router();
const api = require("./api");
const url = process.env.URL;
_.use(url, api);

module.exports = _;
