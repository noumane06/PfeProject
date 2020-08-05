// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const Usercontroller = require("../controllers/users_controller");
const checkAuth = require('../middlewares/check-auth');
const check_auth_gen = require('../middlewares/check_auth_gen');

router.get('/',Usercontroller.GetProfiles);
router.get('/myprofile/',checkAuth, Usercontroller.getMyprofile);
router.get('/profile/'/*,check_auth_gen*/, Usercontroller.VistingProfile);


module.exports = router;