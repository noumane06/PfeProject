// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const Usercontroller = require("../controllers/users_controller");

router.post('/', Usercontroller.user_signin);

module.exports = router;