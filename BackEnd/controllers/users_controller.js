// dependecies 

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
                                res.status(200).json({
                                    message: "User created succefully",
                                    token: token,
                                    userid : result._id
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


// Getting all profiles 

exports.GetProfiles = (req,res,next)=>{
    User.find({type : 'Société'})
    .select('nom prenom companyname city Usrimg stars')
    .exec()
    .then(docs =>{
        const response = {
            count : docs.length , 
            profiles : docs
        }
        res.status(200).json({
            response
        })
    });
}

// Profile visits 

exports.VistingProfile = (req,res,next) =>{
    const id = req.query.userid ;
    User.find({_id : id })
    .select('type nom prenom companyname diplome city presentation languages title Usrimg stars fixphone booked domaine horraire gender mobilephone addresse ')
    .then(result =>{
        res.status(200).json({
            message : "User Found",
            profile : result
        })
    }).catch(err =>{
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}

// Get profile by userID 

exports.getMyprofile = (req,res,next)=>{
    const id = req.query.userid ;
    User.findOne({_id : id})
    .select('type nom prenom companyname diplome city presentation languages title Usrimg')
    .then(result =>{
        res.status(200).json({
            message : "User Found",
            profile : result
        })
    }).catch(err =>{
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}

// Search user 

exports.SearchUser = async (req,res,next)=>{
    const company = req.query.companyname; 
    const dom = req.query.domaine ; 
    const city = req.query.city ; 
    const page = req.query.page !== undefined ? req.query.page  : 1;
    const resPerPage = 9 ;

    const foundUsers = await User.find({
                companyname : { $regex : '.*'+company+'.*', $options : 'i'} , 
                domaine : { $regex : '.*'+dom+'.*', $options : 'i'} ,
                city : { $regex : '.*'+city+'.*', $options : 'i'} 
             })
    .select('type nom prenom companyname domaine city presentation stars title Usrimg')
    .skip((resPerPage * page) - resPerPage)
    .limit(resPerPage)
    
    const count = await User.countDocuments(
        {companyname : { $regex : '.*'+company+'.*', $options : 'i'} , 
         domaine : { $regex : '.*'+dom+'.*', $options : 'i'} ,
         city : { $regex : '.*'+city+'.*', $options : 'i'} });
    try {
    if (foundUsers.length !== 0) {
        res.status(200).json({
        count : count ,
        message : "User Found",
        profile : foundUsers
        })}else{
                res.status(204).json({
                message : "no status"})
        }
    } catch (error) {
    console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    }
         
}
// Update user Data 

exports.UpdataData = (req,res,next) =>{
    const id = req.query.userid ;
    User.findOne({_id : id})
    .then(userdata =>{
        console.log(req);
        userdata.presentation = req.body.presentation ;
        userdata.diplome = req.body.diplome  ;
        userdata.languages = req.body.languages ;
        userdata.Usrimg = req.body.Usrimg ;
        userdata.save();
        res.status(200).json(
            {
                message : "Updated succefully",
                data : userdata
            }
        )
    })
    .catch(err =>{
        console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}


// -------------------------------------


// Update Like Button 

exports.StarsUpdate  = (req ,res ) =>{
    const id = req.query.userid ; 
    User.updateOne({_id : id},{stars : req.body.stars})
    .then(result=>{
        res.status(200).json(
            {
                message : "Updated succefully",
                data : result
            }
        )
    })
    .catch(err =>{
        console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}


// IF YOU NEED TO CHANGE DATA

// -------------------------------------
// exports.ChangeAll = (req , res , next)=>{
//    User.updateMany({type : 'Société'},{stars :[]})
//    .then(data =>{
//     res.status(200).json(
//         {
//             message : "Updated succefully",
//             data : data
//         }
//     )
//    })
//    .catch(err =>{
//     console.log(err);
//     res.status(404).json({
//         message : "The user is not here :/ , below more infos",
//         error : err
//     })
// })
// }

// -----------------------------------------------------

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
