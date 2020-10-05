// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const AuthController = require("../controllers/Auth_controller");
const VeriController = require("../controllers/Verif_controller");
router.post('/', AuthController.userComp_signup);
router.post('/verifEmail', VeriController.CheckEmail);
module.exports = router;