const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    partner_name:String,
    partner_email: String,
    login_link:String,
    otp:{type:String,default:""}
});

const Partner = mongoose.model("partner",partnerSchema);

module.exports = Partner; 