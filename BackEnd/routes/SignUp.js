// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const AuthController = require("../controllers/Auth_controller");

router.post('/', AuthController.userComp_signup);
router.post('/verifEmail', AuthController.CheckEmail);
module.exports = router;