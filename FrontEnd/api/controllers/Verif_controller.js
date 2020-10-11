const User = require('../models/user_model');
const nodemailer = require("nodemailer");

// Checking if email exist controller 

exports.CheckEmail = (req, res , nxt) => {
    
    User.find({ email: req.body.email })
        .exec()
        .then(result => {
            if (result.length >=1) {
                res.status(409).json({
                    error: "Email already exist"
                }); 
            }else
            {
                res.status(200).json({
                    message : "Valid Email",
                }); 
            }
        })
        .catch(err =>{
            res.status(500).json(err);
        })

}

// Email verification 

