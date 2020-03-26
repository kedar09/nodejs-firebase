const Joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'))
    .extend(require("joi-phone-number"));

var firebaseRealTimeDBController = require('./firebaseRealTimeDB.controller');

exports.getAllUser = function (req, res) {
    firebaseRealTimeDBController.getAllUser(req, res);
};

exports.getUserById = async function (req, res) {
    let data = req.params;
    const schema = Joi.object({
        userId: Joi.string().min(3).max(50).required(),
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseRealTimeDBController.getUserById(req, res);
    }
};

exports.addUser = async function (req, res) {
    let data = req.body;
    const schema = Joi.object({
        userId: Joi.string().min(3).max(50),
        name: Joi.string().min(3).max(50).required(),
        address: Joi.string().min(3).max(50).required(),
        email: Joi.string().email({
            minDomainSegments: 2, 
            tlds: { allow: ['com', 'net'] } 
        }).required(),
        mobileNo: Joi.string().phoneNumber().required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseRealTimeDBController.addUser(req, res);
    }
};

exports.updateUser = async function (req, res) {
    let data = req.body;
    const schema = Joi.object({
        userId: Joi.string().min(3).max(50),
        name: Joi.string().min(3).max(50),
        address: Joi.string().min(3).max(50),
        email: Joi.string().email({
            minDomainSegments: 2, 
            tlds: { allow: ['com', 'net'] } 
        }).required(),
        mobileNo: Joi.string().phoneNumber().required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseRealTimeDBController.updateUser(req, res);
    }
};

exports.deleteUserById = async function (req, res) {
    let data = req.params;
    const schema = Joi.object({
        userId: Joi.string().min(3).max(50).required(),
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseRealTimeDBController.deleteUserById(req, res);
    }    
};



