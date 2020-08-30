const mongoose = require('mongoose');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ******************************
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

// SignUp controller

exports.userComp_signup = (req, res, next) => {
User.find({ email: req.body.email })
    .exec()
    .then(result => {
        if (result.length >= 1) {
            res.status(409).json({
                error: "Email already exist"
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    console.log("error in cryptage --",err);
                    return res.status(500).json({
                        error: err
                    });

                } else {
                    var img = "";
                    if (req.body.Usrimg === "" || req.body.Usrimg === undefined) {
                        {
                            req.body.gender === "male" ? img = "https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2FDefaults%2Fman.svg?alt=media&token=9cc204e7-e9b3-4a5d-970a-1242a04f90de"
                                : img = "https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2FDefaults%2Fwoman.svg?alt=media&token=58d24c71-6b1e-4f61-a25a-fc22d43ec1e3"
                        }
                    } else {
                        img = req.body.Usrimg
                    }
                        const user = new User();
                        user._id = new mongoose.Types.ObjectId() ;
                        user.type = req.body.type ;
                        user.email = req.body.email ;
                        user.password = hash ;
                        user.nom = req.body.nom ;
                        user.prenom = req.body.prenom ;
                        user.addresse = req.body.addresse ;
                        user.city = req.body.city ;
                        user.mobilephone = req.body.mobilephone ;
                        user.Usrimg = img ;
                        user.gender = req.body.gender ;
                        if (req.body.type === "Société") {
                            // Fields for societe 
                            if (req.body.horraire !== undefined) {
                                req.body.horraire.map(hor =>{
                                user.horraire.push(hor);
                                });
                            }
                            if (req.body.domaine !== undefined) {
                                req.body.domaine.map(dom =>{
                                    user.domaine.push(dom);
                                });
                            }
                            if (req.body.diplome !== undefined) {
                                req.body.diplome.map(diploma=>{
                                    user.diplome.push(diploma)
                                });
                            }
                            if (req.body.languages !== undefined) {
                                req.body.languages.map(language =>{
                                    user.languages.push(language)
                                })
                            }
                            
                            user.booked = req.body.booked ;
                            user.stars = req.body.stars ;
                            user.companyname = req.body.companyname ;
                            user.title = req.body.title ;
                            user.fixphone = req.body.fixphone ;
                            user.presentation = req.body.presentation ;
                        
                            // ----------------------------
                        }
                        
                        //
                        

                    user.save()
                        .then(result => {
                            const token = jwt.sign(
                                {
                                    userId: result._id,
                                },
                                "secret",
                                {
                                    expiresIn: "1h"
                                }
                            );
                            res.cookie('token',token,{httpOnly : true});
                            res.status(200).json({
                                message: "User created succefully",
                                token: token
                            });
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(400).json({
                                error: err
                            });
                        });
                }
            });
        }
    }).catch(err => {
        console.log("error catched", err);
        res.status(500).json(err);
    })
};



// SignIn controller for client and company 

exports.user_signin = (req, res, next) => {
User.find({ email: req.body.email })
    .exec()
    .then(userdata => {
        if (userdata.length < 1) {
            console.log("Mail dosn't exist");
            res.status(401).json({
                message: "Auth failed "
            });
        } else {
            bcrypt.compare(req.body.password, userdata[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed 1"
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            userId: userdata[0]._id,
                        },
                        "secret",
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: "Welcome Back " + userdata[0].nom,
                        token: token
                    });
                }
                else {
                    return res.status(401).json({
                        message: "Wrong email or password"
                    });
                }
            });
        }
    })
};

// deleting user with the use of userid
// Still need auth check (checking usrid in the token is the same).
exports.user_delete = (req, res, next) => {
    const id = req.params.userId;
    User.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "User deleted succefully",
                result: result
            });
        })
        .catch(err => {
            res.status(404).json({
                error: " No such Id "
            });
            console.log(err);
        });
};

