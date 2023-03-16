const { Router } = require("express");
const { generateOtp, loginPartner, addEvent } = require("../controllers/partner.controller");
// const redirectEventPage = require("../middlewares/redirectEventPage");
// const redirectLoginPage = require("../middlewares/redirectLoginPage");

const partnerRoutes = Router();

partnerRoutes.post("/generateOtp",generateOtp);
partnerRoutes.post("/login",loginPartner);
partnerRoutes.post("/add_event",addEvent);

module.exports = partnerRoutes ;