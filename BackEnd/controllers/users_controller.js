// dependecies 

const mongoose = require('mongoose');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ******************************
// user signup controller
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
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            type: 'Company',
                            email: req.body.email,
                            password: hash,
                            nom: req.body.nom,
                            prenom: req.body.prenom,
                            companyname: req.body.companyname,
                            title: req.body.title,
                            domaine: req.body.domaine,
                            addresse: req.body.addresse,
                            city: req.body.city,
                            mobilephone: req.body.mobilephone,
                            fixphone: req.body.fixphone,
                            presentation: req.body.presentation,
                            diplome: req.body.diplome,
                            languages: req.body.languages,
                            Usrimg: req.body.Usrimg,
                            gender: req.body.gender,
                            horraire: req.body.horraire,
                            booked: req.body.booked,
                            stars: req.body.stars
                        });
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


// Client signup controller
exports.userClient_signup = (req, res, next) => {
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
                        return res.status(500).json({
                            error: err
                        });

                    } else {
                        var img = "";
                        if (req.body.Usrimg === "" || req.body.Usrimg === undefined) {
                            {
                                req.body.gender === "homme" ? img = "https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2FDefaults%2Fman.svg?alt=media&token=9cc204e7-e9b3-4a5d-970a-1242a04f90de"
                                : img = "https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2FDefaults%2Fwoman.svg?alt=media&token=58d24c71-6b1e-4f61-a25a-fc22d43ec1e3"
                            }
                        } else {
                            img = req.body.Usrimg
                        }
                     
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            type : 'Client',
                            email: req.body.email,
                            password: hash,
                            nom: req.body.nom,
                            prenom: req.body.prenom,
                            addresse: req.body.addresse,
                            pays : req.body.pays,
                            city : req.body.city,
                            mobilephone: req.body.mobilephone,
                            Usrimg: img,
                            gender: req.body.gender,
                        });
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
                        console.log("wrong mail or password ");
                        return res.status(401).json({
                            message: "Auth failed 1"
                        });
                    }
                    if (result) {
                        console.log("we made it")
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

/*exports.user_delete = (req, res, next) => {
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
};*/
