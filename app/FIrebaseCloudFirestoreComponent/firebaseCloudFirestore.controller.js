var firebaseCloudFirestoreModel = require('./firebaseCloudFirestore.model');

exports.getAllUser = function (req, res) {
    firebaseCloudFirestoreModel.getAllUser(function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.getUserById = function (req, res) {
    firebaseCloudFirestoreModel.getUserById(req.params.userId, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.addUser = function (req, res) {
    firebaseCloudFirestoreModel.addUser(req.body, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.updateUser = function (req, res) {
    firebaseCloudFirestoreModel.updateUser(req.body, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.deleteUserById = function (req, res) {
    firebaseCloudFirestoreModel.deleteUserById(req.params.userId, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

