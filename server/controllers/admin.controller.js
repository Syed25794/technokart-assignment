const Partner = require("../models/partner.models");
const SuperAdmin = require("../models/superAdmin.models");
const bcrypt = require("bcrypt");

const createSuperAdmin = async (req, res) => {
    let { adminName, email, password } = req.body;

    //hashing password
    bcrypt.hash(password, 5, async (error, hashedPassword) => {
      if (error) {
        return res.status(400).send({ error: error.message });
      }
      password = hashedPassword;
    });

    try {
      const admin = await SuperAdmin.findOne();
      
      //If super admin exists
      if (admin) {
        const updateAdmin = await SuperAdmin.updateOne({
          adminName,
          email,
          password,
        });
      } else {
        const superAdmin = new SuperAdmin({
          adminName,
          email,
          password,
        });
        superAdmin.save();
      }
      res.status(201).send({ message: "Super Admin created successfully" });
    } catch (error) {
      res.status(400).send({ message: "something went wrong in creating super admin." });
    }
  };

const loginSuperAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await SuperAdmin.findOne({ email });
    if( admin ){
      //comparing hashed and login password
      bcrypt.compare(password, admin.password, function(err, result) {
        if( err ){
          res.status(400).send({error:err.message});
        }else{
            res.status(200).send({result});
        }
      });
    }else{
      
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const addPartner = async (req, res) => {
    const { partner_name, partner_email, login_link } = req.body;

    //making link for login
    // const login_link = `localhost:3000/${partner_name}/login`;
    try {
        //saving partner
      const newPartner = new Partner({
        partner_name,
        partner_email,
        login_link
      });
      await newPartner.save();
      const createdPartner = await Partner.findOne({partner_email});
      res.status(201).send({ message: "Partner is created successfully.",payload:createdPartner });
      console.log(createdPartner);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

const getPartners = async (req, res) => {
  const { page, limit } = req.query;
  let limitPartner = limit;
  let skips = 10 * (Number(page) - 1);
  try {
    //skipping and limit for pagination
    let partners = await Partner.find().skip(skips).limit(limitPartner);
    res.status(200).send({ data: partners });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const editPartnerDetails = async (req, res) => {
  const { partner_email, newName, newEmail ,login_link} = req.body;
//   const login_link = `localhost:3000/${newName}/login`;
  try {
    //updating partner values
    const result = await Partner.updateOne({ partner_email },{ partner_email: newEmail, partner_name: newName, login_link });
    res.status(202).send({ result });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deletePartner = async (req, res) => {
  const { partner_email } = req.body;
  try {
    //deleting partner document
    let result = await Partner.deleteOne({partner_email});
    res.status(202).send({result});
  } catch (error) {
    res.status(400).send({error:error.message})
  }
};

module.exports = {
  loginSuperAdmin,
  createSuperAdmin,
  getPartners,
  addPartner,
  editPartnerDetails,
  deletePartner,
};
