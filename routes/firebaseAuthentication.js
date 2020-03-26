var express = require('express');
var router = express.Router();

var firebaseSettings = require('../config/firebaseConfig');

var firebaseAuthenticationValidator = require('../app/FirebaseAuthenticationComponent/firebaseAuthentication.validator');

// get user profile - (body: [uid]) - (uid is required)
router.post('/getUser', firebaseAuthenticationValidator.getUserProfile);

// create new user profile- (body: [email,password,displayName,phoneNumber]) - (email,password is required)
router.post('/createUser', firebaseAuthenticationValidator.createUserProfile);

// // update user - (body: [uid,email,password,displayName,phoneNumber]) - (uid is required)
router.put('/updateUser', firebaseAuthenticationValidator.updateUserProfile);

// // delete user by id - (body: [uid]) - (uid is required)
router.post('/deleteUser', firebaseAuthenticationValidator.deleteUserProfile);


module.exports = router;
