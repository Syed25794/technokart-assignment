const express = require("express");
const connection = require("./config/database");
const adminRoutes = require("./routes/admin.routes");
const partnerRoutes = require("./routes/partner.routes");
require("dotenv").config();
const { PORT } = process.env ; 

const application = express();

application.use(express.json());


application.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page.</h1>");
});
application.use("/super-admin",adminRoutes);
application.use("/:partnername",partnerRoutes);

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

