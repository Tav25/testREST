const express = require("express");
const router = express.Router();
const passport = require("passport");

require('../middleware/pasport')(passport);

//!
const controller = require("../controllers/posting");

// localhost:3000/api/post/new
router.get("/new", passport.authenticate('jwt',{session: false}), controller.new);

// localhost:3000/api/post/edit
router.get("/edit", passport.authenticate('jwt',{session: false}), controller.edit);

// localhost:3000/api/post/delete
router.get("/delete", controller.delete);
//!

module.exports = router;
