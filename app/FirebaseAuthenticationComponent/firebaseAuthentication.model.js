var firebaseSettings = require('../../config/firebaseConfig');

exports.getUserProfile = function (uid, result) {
    firebaseSettings.auth().getUser(uid).then(function(userRecord) {
        let resultGetUserProfile = { UserData: userRecord.toJSON() };
        result(null, resultGetUserProfile);
    }).catch(function(error) {
        result(null, error);
    });
};

exports.createUserProfile = function (body, result) {
    firebaseSettings.auth().createUser({
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        displayName: body.displayName
    }).then(function(userRecord) {
        let resultCreateUserProfile = { message: 'Successfully created new user', uid: userRecord.uid };
        result(null, resultCreateUserProfile);
    }).catch(function(error) {
        result(null, error);
    });
};

exports.updateUserProfile = function (body, result) {
    firebaseSettings.auth().updateUser(body.uid, {
        email: body.email,
        password: body.password,
        phoneNumber: body.phoneNumber,
        displayName: body.displayName
    }).then(function(userRecord) {
        let resultUpdateUserProfile = { message: 'Successfully updated user', userRecord: userRecord.toJSON() };
        result(null, resultUpdateUserProfile);
    }).catch(function(error) {
        result(null, error);
    });
};

exports.deleteUserProfile =  function (uid, result) {
    firebaseSettings.auth().deleteUser(uid).then(function() {
        let resultDeleteUserProfile = { message: 'Successfully deleted user'};
        result(null, resultDeleteUserProfile);
    }).catch(function(error) {
        result(null, error);
    });
};

