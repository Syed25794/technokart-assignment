const Partner = require("../models/partner.models");
const SuperAdmin = require("../models/superAdmin.models");
const bcrypt = require("bcrypt");

const loginSuperAdmin = async (req, res) => {
    const { email, password } = req.body;
  try {
    const admin = await SuperAdmin.findOne({email});
    const isValid = await bcrypt.compare(password,admin.password);
    res.status(200).send({isValid});
  } catch (error) {
    res.status(400).send({error:error.message});
  }
};

const getPartners = async ( req, res ) =>{
    try{
        let partners = await Partner.find();
        res.status(200).send({data:partners});
    }catch(error){
        res.status(400).send({error:error.message});
    }
}

const createSuperAdmin = async (req, res) => {
    let { adminName, email, password } = req.body;
    bcrypt.hash(password,5,async(error,hashedPassword)=>{
        if( error ){
            return res.status(400).send({error:error.message});
        }
        password = hashedPassword;
    });
  try {
    const admin = await SuperAdmin.findOne();
    if (admin) {
        const updateAdmin = await SuperAdmin.updateOne({
            adminName,
            email,
            password
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
    res
      .status(400)
      .send({ message: "something went wrong in creating super admin." });
  }
};

module.exports = { loginSuperAdmin, createSuperAdmin, getPartners };
