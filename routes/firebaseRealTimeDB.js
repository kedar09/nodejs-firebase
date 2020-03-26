var express = require('express');
var router = express.Router();

var firebaseSettings = require('../config/firebaseConfig');

var firebaseRealTimeDBValidator = require('../app/FirebaseRealTimeDBComponent/firebaseRealTimeDB.validator');

// get all user
router.get('/getAllUser', firebaseRealTimeDBValidator.getAllUser);

// get user by id - (params: [userId]) - (userId is required)
router.get('/getUserById/:userId', firebaseRealTimeDBValidator.getUserById);

// add new user - (body: [userId,name,address,email,mobileNo]) - (name,address,email,mobileNo is required)
router.post('/addUser', firebaseRealTimeDBValidator.addUser);

// update user - (body: [userId,name,address,email,mobileNo]) - (name,address,email,mobileNo is required)
router.put('/updateUser', firebaseRealTimeDBValidator.updateUser);

// delete user by id - (params: [userId]) - (userId is required)
router.delete('/deleteUserById/:userId', firebaseRealTimeDBValidator.deleteUserById);

module.exports = router;
