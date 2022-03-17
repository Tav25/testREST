const express = require("express");
const app = express();

const mongoose = require("mongoose");
const keys = require("./config/keys");

const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

mongoose
  .connect('mongodb+srv://tav25:xqxZsLIdyFzvP6Vk@cluster0.vvahu.mongodb.net/restApi?retryWrites=true&w=majority')
  .then(() => console.log("MB Connect"))
  .catch(() => console.log('error'));



////
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posting");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
