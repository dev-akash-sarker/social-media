require("dotenv").config();
const express = require("express");
var cors = require("cors");

const _ = require("./router");
const { connect } = require("./database/dbConfig");

// database connection function
connect();

// express and middlewere
const app = express();
app.use(express.json());
app.use(cors());
app.use(_);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Hello this is one year academy and the port is ${port}`);
});
