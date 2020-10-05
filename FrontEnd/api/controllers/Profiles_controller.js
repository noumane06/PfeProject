// dependecies 

const User = require('../models/user_model');
  


// Getting all profiles 
// route ===>> /Profiles/

exports.GetProfiles = (req,res)=>{
    User.find({type : 'Société'})
    .select('nom prenom companyname city Usrimg stars Notification')
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

// route ===>> /Profiles/hotprofiles

exports.GetHotProfiles = (req,res)=>
{
    User.find({type : 'Société'})
    .select('type nom prenom companyname domaine  city presentation stars title Usrimg')
    .sort({stars : 'desc'})
    .limit(3)
    .exec()
    .then(docs =>{
        const response = {
            count : docs.length , 
            profiles : docs
        }
        res.status(200).json({
            response
        })
    })
}

// Profile visits 
// route ===>> /Profiles/updatebook

exports.VistingProfile = (req,res) =>{
    const id = req.query.userid ;
    const AuthId = req.AuthID ;
    User.findOne({_id : id })
    .select('type nom prenom companyname diplome city presentation languages title Usrimg stars fixphone booked domaine horraire gender mobilephone addresse  Notification')
    .then(result =>{
        res.status(200).json({
            message : "User Found",
            profile : result,
            AuthId : AuthId
        })
    }).catch(err =>{
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}

// Get profile by userID 
// route ===>> /Profiles/myprofile

exports.getMyprofile = (req,res)=>{
    const id = req.userData ;
    User.findOne({_id : id})
    .select('type nom prenom companyname diplome NotifView city presentation languages title email Usrimg stars fixphone booked domaine horraire gender mobilephone addresse Notification')
    .sort({'Notification' : 'desc'})
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
// route ===>> /Profiles/search

exports.SearchUser = async (req,res)=>{
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
    .select('type nom prenom companyname domaine  city presentation stars title Usrimg')
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



// -------------------------------------



// IF YOU NEED TO CHANGE DATA 

// route ===>> /Profiles/upall
// TODO : delete in production
// -------------------------------------
exports.ChangeAll = (req , res)=>{
   User.updateMany({},{Notification :[]})
   .then(data =>{
    res.status(200).json(
        {
            message : "Updated succesfully",
            data : data
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






