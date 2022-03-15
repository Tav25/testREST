module.exports.login = function (req, res, next) {
  res.status(200).json({
    login: 'from controller',
  });
}


module.exports.register = function (req, res, next) {
  res.status(200).json({
    register: 'from controller',
  });
}
