const mongoose = require("mongoose");
const username = process.env.username;
const password = process.env.password;
const collectionName = process.env.collectionName;
exports.connect = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => console.log("Database Connected Successfully!"));
};
