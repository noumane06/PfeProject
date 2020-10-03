const User = require('../models/user_model');
const MailComposer = require('nodemailer/lib/mail-composer');

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

exports.VerifEmail = (req, res , nxt) => {
    
    const mailOptions = {
        from: 'noumane_tro97@hotmail.com',
        to: 'noumane.06@gmail.com',
        text: 'Test message'
    };
    new MailComposer(mailOptions).compile().build().then(result =>{
        res.status(200).json({
            message : "email sent succesfully",
            result
        }); 
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    })

}