// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const Usercontroller = require("../controllers/users_controller");
const checkAuth = require('../middlewares/check-auth');
const check_auth_gen = require('../middlewares/check_auth_gen');
const myProfile_check = require('../middlewares/myProfile_check');

router.get('/',Usercontroller.GetProfiles);
router.get('/myprofile' ,myProfile_check, Usercontroller.getMyprofile)
router.get('/profile/',check_auth_gen, Usercontroller.VistingProfile);
router.post('/update',checkAuth,Usercontroller.UpdataData);
router.post('/like' ,check_auth_gen, Usercontroller.StarsUpdate);
router.get('/search', Usercontroller.SearchUser);
// -------------------------------------

// IF YOU NEED TO CHANGE DATA

// -------------------------------------
// router.post('/upall',Usercontroller.ChangeAll);
module.exports = router;