const { Router } = require("express");
const { createSuperAdmin, loginSuperAdmin, getPartners, addPartner, editPartnerDetails, deletePartner } = require("../controllers/admin.controller");
const validateParameters  = require("../middlewares/validateParameters");

const adminRoutes = Router();

adminRoutes.post("/createSuperAdmin",createSuperAdmin);
adminRoutes.post("/login",loginSuperAdmin);
adminRoutes.get("/dashboard",validateParameters,getPartners);
adminRoutes.post("/addPartner",addPartner);
adminRoutes.patch("/editPartner",editPartnerDetails);
adminRoutes.delete("/deletePartner",deletePartner);

module.exports = adminRoutes ;