const { Router } = require("express");
const { generateOtp, loginPartner, addEvent } = require("../controllers/partner.controller");

const partnerRoutes = Router();

partnerRoutes.post("/generateOtp",generateOtp);
partnerRoutes.post("/login",loginPartner);
partnerRoutes.post("/add_event",addEvent);

module.exports = partnerRoutes ;