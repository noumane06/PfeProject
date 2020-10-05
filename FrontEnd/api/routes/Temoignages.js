// dependencies 

const express = require('express');
const router = express.Router();
const check_auth_gen = require('../middlewares/check_auth_gen');
const myProfile_check = require('../middlewares/myProfile_check');

const temoignController = require('../controllers/Temoignages_Controller');

router.get("/",temoignController.getTem);
router.post("/",myProfile_check,temoignController.PostTemoin);

module.exports = router ;