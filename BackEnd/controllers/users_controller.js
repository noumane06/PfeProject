// dependecies 

const mongoose = require('mongoose');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
    const id = req.userData ;
    User.findOne({_id : id})
    .select('type nom prenom companyname diplome city presentation languages title Usrimg stars fixphone booked domaine horraire gender mobilephone addresse')
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
        userdata.presentation = req.body.presentation ;
        userdata.diplome = req.body.diplome  ;
        userdata.languages = req.body.languages ;
        userdata.Usrimg = req.body.Usrimg ;
        userdata.nom = req.body.nom ;
        userdata.prenom = req.body.prenom;
        userdata.addresse = req.body.addresse;
        userdata.city = req.body.city;
        userdata.companyname = req.body.companyname;
        userdata.title = req.body.title;
        userdata.horraire = req.body.horraire ;  
        userdata.domaine  = req.body.domaine ;
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


