const redirectEventPage = async (req, res, next) => {
  if (req.session.partnerId) {
    res.redirect("/add_event");
  }
  next();
};

module.exports = redirectEventPage;
