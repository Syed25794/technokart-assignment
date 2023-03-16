const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const Partner = require("../models/partner.models");
const Event = require("../models/event.models");
require("dotenv").config();

const generateOtp = async (req, res) => {
  const { partner_email } = req.body;

  try {
    //generating otp of 4 digit
    const otp = otpGenerator.generate(4, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    //setting mailTransporter
    const mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "syedgulmohd25794@gmail.com",
        pass: process.env.PASSWORD,
      },
    });

    //Creating HTML page of email
    const HTML = `<div><h3>Please verify your email</h3><p>Otp for verification:<b>${otp}<b></p><p>Otp will expire in 2 minutes.<p>Thank you!</p></div>`;

    // send mail with defined transport object
    let info = await mailTransporter.sendMail({
      from: `<syedgulmohd25794@gmail.com>`, // sender address
      to: partner_email, // list of receivers
      subject: `Email Verification code : ${otp}`, // Subject line
      html: HTML, // html body
    });
    //updaing partner with otp
    const updateOtp = await Partner.updateOne({ partner_email }, { otp });

    //deleting otp after 2 minutes
    setTimeout(async () => {
      const removeOtp = await Partner.updateOne({ partner_email }, { otp: "" });
    }, 120000);
    res.status(200).send({ otp });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const loginPartner = async (req, res) => {
  const { partner_email, otp } = req.body;
  try {
    const partner = await Partner.findOne({ partner_email });
    if (partner) {
        //comparing database otp and client side otp
      if (partner.otp == otp) {
        res.status(200).send({ message: "login successfully" });
      } else {
        res.status(400).send({ message: "otp not verified!" });
      }
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const addEvent = async (req, res) => {
  const {event_name,country,state,city,pincode,event_photo,} = req.body;
  try {
    //saving event
    const newEvent = new Event({
      event_name,
      country,
      state,
      city,
      pincode,
      event_photo,
    });
    newEvent.save();
    res.status(201).send({"message":"added event"});
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// const destroySession = async ( req, res )=>{
//     req.session.destroy((err)=>{
//         if( err ){
//             console.log(err);
//         }
//     });
//     res.status(200).send({"message":"session destroyed!"});
// }

module.exports = { generateOtp, loginPartner, addEvent };
