var firebaseRealTimeDBModel = require('./firebaseRealTimeDB.model');

exports.getAllUser = function (req, res) {
    firebaseRealTimeDBModel.getAllUser(function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.getUserById = function (req, res) {
    firebaseRealTimeDBModel.getUserById(req.params.userId, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.addUser = function (req, res) {
    firebaseRealTimeDBModel.addUser(req.body, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.updateUser = function (req, res) {
    firebaseRealTimeDBModel.updateUser(req.body, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.deleteUserById = function (req, res) {
    firebaseRealTimeDBModel.deleteUserById(req.params.userId, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

