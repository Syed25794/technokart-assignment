const { Router } = require("express");

const adminRoutes = Router();

adminRoutes.post("/login");
adminRoutes.get("/dashboard");

module.exports = adminRoutes ;