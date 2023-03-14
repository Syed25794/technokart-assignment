const validateParameters = (req, res, next) => {
  const { page, limit } = req.query;
  if (!page || !limit) {
    return res.status(400).send({ message: "Page or limit parameter not found!" });
  }
  next();
};

module.exports = validateParameters;
