const express = require("express");
const app = express();

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posting");

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
