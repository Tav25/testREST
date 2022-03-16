const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posting");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
