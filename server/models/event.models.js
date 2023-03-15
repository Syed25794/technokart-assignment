const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    event_name:String,
    country: String,
    state:String,
    city:String,
    pincode:String,
    event_photo:String
});

const Event = mongoose.model("event",eventSchema);

module.exports = Event; 