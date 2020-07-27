// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const Usercontroller = require("../controllers/users_controller");

router.post('/comp', Usercontroller.userComp_signup);
router.post('/client',Usercontroller.userClient_signup);

module.exports = router;