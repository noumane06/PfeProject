// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const Usercontroller = require("../controllers/users_controller");

router.post('/', Usercontroller.userComp_signup);
router.post('/verifEmail', Usercontroller.CheckEmail);
module.exports = router;