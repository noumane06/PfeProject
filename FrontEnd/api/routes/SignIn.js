// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const AuthController = require("../controllers/Auth_controller");

router.post('/', AuthController.user_signin);

module.exports = router;