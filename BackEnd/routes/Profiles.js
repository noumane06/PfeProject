// dependencies 

const express = require('express');
const router = express.Router();

// *******************************************

// 
const ProfilesController = require("../controllers/Profiles_controller");
const UpdatesController = require("../controllers/Updates_controller");
const VerifController = require("../controllers/Verif_controller");
const check_auth_gen = require('../middlewares/check_auth_gen');
const myProfile_check = require('../middlewares/myProfile_check');

router.get('/',ProfilesController.GetProfiles);
router.get('/myprofile' ,myProfile_check, ProfilesController.getMyprofile)
router.get('/profile/',check_auth_gen, ProfilesController.VistingProfile);
router.post('/update',check_auth_gen,UpdatesController.UpdateAllData);
router.post('/like' ,check_auth_gen, UpdatesController.Liked);
router.post('/bookmeeting',check_auth_gen,UpdatesController.BookedUpdate);
router.post('/updatebook',check_auth_gen,UpdatesController.BookOwnProfile);
router.get('/viewedNot',check_auth_gen,UpdatesController.NotificationViewed);
router.get('/hotprofiles',ProfilesController.GetHotProfiles);
router.get('/search', ProfilesController.SearchUser);
router.post('/mailVerification',VerifController.VerifEmail);
// -------------------------------------

// IF YOU NEED TO CHANGE DATA

// -------------------------------------
router.get('/upall',ProfilesController.ChangeAll);

// ---------------
module.exports = router;