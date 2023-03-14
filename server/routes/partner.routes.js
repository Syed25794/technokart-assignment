const { Router } = require("express");
const { generateOtp } = require("../controllers/partner.controller");

const partnerRoutes = Router();

partnerRoutes.post("/generateOtp",generateOtp);
partnerRoutes.post("/login");
partnerRoutes.post("/add_event");
partnerRoutes.get("/thankyoupage");

module.exports = partnerRoutes ;