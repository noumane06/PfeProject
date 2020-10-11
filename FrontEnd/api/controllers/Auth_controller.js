const mongoose = require('mongoose');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

// ******************************

// SignUp controller
// route ===>> /signup/


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
                            req.body.gender === "male" ? img = "https://firebasestorage.googleapis.com/v0/b/solutions-eaa28.appspot.com/o/images%2FDefaults%2Fman.svg?alt=media&token=ac235aee-f629-4824-9ea4-c38398528b24"
                                : img = "https://firebasestorage.googleapis.com/v0/b/solutions-eaa28.appspot.com/o/images%2FDefaults%2Fwoman.svg?alt=media&token=6cad4395-ffbe-444b-9db1-73133944b937"
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
                            user.Notification = req.body.Notification ;
                            // ----------------------------
                        }
                        
                        //
                        

                    user.save()
                        .then(userdata => {
                            const AuthToken = jwt.sign({userId: userdata._id,},process.env.AUTH_SECRET,{expiresIn: "7d"});
                            console.log(process.env.COOKIES_SECURE);
                            res.cookie('auth',AuthToken,{
                                httpOnly: true ,
                                secure : process.env.COOKIES_SECURE !== 'false',
                                sameSite : 'strict',
                                maxAge : 1000*60*60*24*7 ,
                                path : '/'
                            })
                            res.status(200).json({
                                message: "User created succefully"
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
// route ===>> /signin

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
                    const AuthToken = jwt.sign({userId: userdata[0]._id,},process.env.AUTH_SECRET,{expiresIn: "7d"});
                    console.log(process.env.COOKIES_SECURE);
                    res.cookie('auth',AuthToken,{
                        httpOnly: true ,
                        secure : process.env.COOKIES_SECURE !== 'false',
                        sameSite : 'strict',
                        maxAge : 1000*60*60*24*7 ,
                        path : '/'
                    })
                    
                
                    return res.status(200).json({message : "loggedIn"});
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


// route ===>> /signout

exports.user_signout = (req,res) =>{
    const id = req.userData ;
    User.find({_id : id})
    .then(resp =>{
        res.cookie('auth',"",{
            httpOnly: true ,
            secure : process.env.COOKIES_SECURE !== 'false',
            sameSite : 'strict',
            maxAge : 0 ,
            path : '/'
        })
        return res.status(200).json({message : "You're Logged Out"});
    })
    .catch(err =>{
        console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}


