const Tem = require('../models/temoignages_model');
const User = require('../models/user_model');
const mongoose = require('mongoose');


const CheckUser = (res)=>{
    return new Promise((resolve,reject)=>{
        User.find({_id : res.usrId})
        .then(userdata =>{
            const data = {
                temId : res._id ,
                usrId : res.usrId ,
                link : res.link ,
                companyname : userdata[0].companyname ,
                nom : userdata[0].nom , 
                prenom : userdata[0].prenom ,
                Usrimg : userdata[0].Usrimg
            }
            resolve(data);
        })
        .catch(err =>{
            reject(err);
        })
    })
}


const anAsyncFunction = async item => {
  return CheckUser(item)
}

const getData = async (results) => {
  return Promise.all(results.map(res => anAsyncFunction(res)))
}




exports.getTem =  (req,res) =>{
    const page = req.query.page !== undefined ? req.query.page  : 1;
    const resPerPage = 9 ;
    Tem.find()
    .skip((resPerPage * page) - resPerPage)
    .limit(resPerPage)
    .sort({_id : -1})
    .then( results =>{
        getData(results).then(data => {
            res.status(200).json({
                count : results.length ,
                message : "Success",
                data
            })
        })
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            error
        });
    })
}

exports.PostTemoin = (req,res) =>{
    const AuthId = req.userData ;
    Tem.find({usrId : AuthId})
    .exec()
    .then(result =>{
            const temoi = new Tem();
            temoi._id = new mongoose.Types.ObjectId() ;
            temoi.usrId = AuthId ;
            temoi.link = req.body.link ;
            temoi.save().then(temoidata =>{
                res.status(200).json({
                    
                    message : "created succesfully",
                    temoidata
                })
            })
            .catch(err =>{
                console.log(err);
                res.status(400).json({
                    error: err
                });
            })

    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            error
        });
    })
}





/*
const page = req.query.page !== undefined ? req.query.page  : 1;
    const resPerPage = 9 ;

    const foundUsers = await User.find({
                companyname : { $regex : '.*'+company+'.*', $options : 'i'} , 
                domaine : { $regex : '.*'+dom+'.*', $options : 'i'} ,
                city : { $regex : '.*'+city+'.*', $options : 'i'} 
             })
    .select('type nom prenom companyname domaine  city presentation stars title Usrimg')
*/