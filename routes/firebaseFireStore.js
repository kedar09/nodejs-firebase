var express = require('express');
var router = express.Router();

var firebaseSettings = require('../config/firebaseConfig');

var firebaseCloudFirestoreValidator = require('../app/FIrebaseCloudFirestoreComponent/firebaseCloudFirestore.validator');

// get all user
router.get('/getAllUser', firebaseCloudFirestoreValidator.getAllUser);

// get user by id - (params: [userId]) - (userId is required)
router.get('/getUserById/:userId', firebaseCloudFirestoreValidator.getUserById);

// add new user - (body: [userId,name,address,email,mobileNo]) - (name,address,email,mobileNo is required)
router.post('/addUser', firebaseCloudFirestoreValidator.addUser);

// update user - (body: [userId,name,address,email,mobileNo]) - (userId,name,address,email,mobileNo is required)
router.put('/updateUser', firebaseCloudFirestoreValidator.updateUser);

// delete user by id - (params: [userId]) - (userId is required)
router.delete('/deleteUserById/:userId', firebaseCloudFirestoreValidator.deleteUserById);


module.exports = router;
