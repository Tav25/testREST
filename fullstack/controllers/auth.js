module.exports.login = function (req, res, next) {
  res.status(200).json({
    login: req.body,
  });
}


module.exports.register = function (req, res, next) {
  res.status(200).json({
    register: 'from controller',
  });
}
