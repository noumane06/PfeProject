// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const AuthController = require("../controllers/Auth_controller");
const myProfile_check = require('../middlewares/myProfile_check');

router.get('/',myProfile_check,AuthController.user_signout);

module.exports = router;