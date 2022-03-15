module.exports.new = function (req, res, next) {
  res.status(200).json({
    post: "new",
  });
};

module.exports.edit = function (req, res, next) {
  res.status(200).json({
    post: "edit",
  });
};

module.exports.delete = function (req, res, next) {
  res.status(200).json({
    post: "delete",
  });
};
