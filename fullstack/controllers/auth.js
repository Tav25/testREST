const bcrypt = require("bcryptjs");

const User = require("../models/User");

module.exports.login = function (req, res, next) {
  res.status(200).json({
    login: req.body,
  });
};

module.exports.register = async function (req, res, next) {
  // res.status(200).json({
  //   register: 'from controller',
  // });

  // const user = new User({
  //   email: req.body.email,
  //   password: req.body.password
  // })
  // user.save().then(()=> console.log('User create'))

  candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    console.log("cand yes");

    res.status(409).json({ message: "User is already registered" });
  } else {
    // console.log("cand no");
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save().then(() => console.log("User create"));
      res.status(201).json(user);
    } catch (e) {
      console.log("Error");
    }
  }
};
