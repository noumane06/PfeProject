const User = require('../models/user_model');


// Update user Data 
// route ===>> /Profiles/update
exports.UpdateAllData = (req,res,next) =>{
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

// Update Like Button 
// route ===>> /Profiles/like


exports.Liked  = (req ,res ) =>{
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

// Book Metting and send notification 
/* data must be like this => data {booked : [{}],Notification : {}}
*/

// route ===>> /Profiles/update


exports.BookedUpdate = (req,res,next)=>{
    const id = req.query.userid ; 
    User.findOne({_id : id})
    .then(userdata => {
        userdata.booked = req.body.booked ;
        userdata.NotifView = userdata.NotifView + 1 ;
        userdata.Notification.push({
            Type : req.body.Notification.Type ,
            Message : req.body.Notification.Message ,
            SenderId : req.AuthID.userId ,
            horraire : req.body.Notification.horraire,
            day : req.body.Notification.day,
            AcceptStatus : req.body.Notification.AcceptStatus ,
            date : Date.now(),
        })
        userdata.save();
        res.status(200).json({
            message : "Updated Succesfuly"
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}

// When receive a notification
// route ===>> /Profiles/updatebook

exports.BookOwnProfile = (req,res)=>{
    const id = req.AuthID.userId ;
    User.findOne({_id : id})
    .then(userdata =>{
        userdata.Notification = req.body.Notification;
        userdata.booked = req.body.booked ;
        userdata.save();
        res.status(200).json({
            message : "Updated Succesfully"
        })
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}

// Reset notification count . 
// route ===>> /Profiles/viewedNot


exports.NotificationViewed = (req, res)=>{
    const id = req.AuthID.userId ;
    User.updateOne({_id : id},{NotifView : 0})
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