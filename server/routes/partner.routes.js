const { Router } = require("express");

const partnerRoutes = Router();

partnerRoutes.post("/generateOtp");
partnerRoutes.post("/login");
partnerRoutes.post("/add_event");
partnerRoutes.get("/thankyoupage");

module.exports = partnerRoutes ;