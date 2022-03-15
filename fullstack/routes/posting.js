const express = require("express");
const router = express.Router();

//!
const controller = require("../controllers/posting");

// localhost:3000/api/post/new
router.get("/new", controller.new);

// localhost:3000/api/post/edit
router.get("/edit", controller.edit);

// localhost:3000/api/post/delete
router.get("/delete", controller.delete);
//!

module.exports = router;
