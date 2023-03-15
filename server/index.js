const express = require("express");
const connection = require("./config/database");
const adminRoutes = require("./routes/admin.routes");
const partnerRoutes = require("./routes/partner.routes");
const session = require('express-session');
const cors = require("cors");
// const { destroySession } = require("./controllers/partner.controller");
require("dotenv").config();
const { PORT } = process.env ; 

const application = express();

application.use(express.json());
application.use(cors());
// configure session middleware
application.use(session({
    name:"hihfknvjsdo",
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        maxAge:1000 * 60 * 15,
        sameSite:true
     }
}));

// application.get("/destroySession",destroySession);

application.use("/super-admin",adminRoutes);
application.use("/:partnername",partnerRoutes);
// Middleware function for handling undefined routes
application.use((req, res, next) => {
    res.status(404).send('Sorry, the requested URL was not found on this server.');
});

application.listen(PORT,async ()=>{
    try{
        console.log(`Server is running on the localhost port : ${PORT}`);
        connection;
        console.log("Connected with database.");
    }catch(err){
        console.log("Something went wrong in connection with database.");
        console.log(err);
    }
});

