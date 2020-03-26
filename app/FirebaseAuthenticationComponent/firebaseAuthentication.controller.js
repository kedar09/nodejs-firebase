var firebaseAuthenticationModel = require('./firebaseAuthentication.model');

exports.getUserProfile = function (req, res) {
    firebaseAuthenticationModel.getUserProfile(req.body.uid, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};


exports.createUserProfile = function (req, res) {
    firebaseAuthenticationModel.createUserProfile(req.body, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.updateUserProfile = function (req, res) {
    firebaseAuthenticationModel.updateUserProfile(req.body, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.deleteUserProfile = function (req, res) {
    firebaseAuthenticationModel.deleteUserProfile(req.body.uid, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

