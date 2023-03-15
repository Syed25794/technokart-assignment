const redirectLoginPage = async (req, res, next) => {
  if (!req.session.partnerId) {
    res.redirect("/login");
  }
  next();
};

module.exports = redirectLoginPage;
