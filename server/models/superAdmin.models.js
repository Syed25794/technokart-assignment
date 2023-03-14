const mongoose = require("mongoose");

const superAdminSchema = new mongoose.Schema({
    adminName:String,
    email: String,
    password:String
});

const SuperAdmin = mongoose.model("super-admin",superAdminSchema);

module.exports = SuperAdmin; 