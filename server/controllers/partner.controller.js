const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const Partner = require("../models/partner.models");
require("dotenv").config();

const generateOtp = async ( req, res )=>{
    const { partner_email } = req.body;
    const otp = otpGenerator.generate(4,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});

    const mailTransporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"syedgulmohd25794@gmail.com",
            pass:process.env.PASSWORD
        }
    });

    const HTML = `<div><h3>Please verify your email</h3><p>Otp for verification:<b>${otp}<b></p><p>Otp will expire in 2 minutes.<p>Thank you!</p></div>`

    // send mail with defined transport object
    let info = await mailTransporter.sendMail({
        from:`<syedgulmohd25794@gmail.com>`, // sender address
        to: partner_email, // list of receivers
        subject: `Email Verification code : ${otp}`, // Subject line
        html:HTML, // html body
    });
    const updateOtp = await Partner.updateOne({partner_email},{otp});
    setTimeout(async()=>{
        const removeOtp = await Partner.updateOne({partner_email},{otp:""});
    },120000)
    res.status(200).send({info});
}

module.exports = { generateOtp };