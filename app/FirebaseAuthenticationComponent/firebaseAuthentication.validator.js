const Joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'))
    .extend(require("joi-phone-number"));

var firebaseAuthenticationController = require('./firebaseAuthentication.controller');

exports.getUserProfile = async function (req, res) {
    let data = req.body;
    const schema = Joi.object({
        uid: Joi.string().min(3).max(50).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseAuthenticationController.getUserProfile(req, res);
    }
};


exports.createUserProfile = async function (req, res) {
    let data = req.body;
    const schema = Joi.object({
        email: Joi.string().email({ 
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] } 
        }).required(),
        password: Joi.string().min(3).max(50).required(),
        phoneNumber: Joi.string().phoneNumber().length(13),
        displayName: Joi.string().min(3).max(50)
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseAuthenticationController.createUserProfile(req, res);
    }
};


exports.updateUserProfile = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        uid: Joi.string().min(3).max(50),
        email: Joi.string().email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] } 
        }),
        password: Joi.string().min(3).max(50),
        phoneNumber: Joi.string().phoneNumber().length(13),
        displayName: Joi.string().min(3).max(50)
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseAuthenticationController.updateUserProfile(req, res);
    }
};

exports.deleteUserProfile = async function (req, res) {
    let data = req.body;
    const schema = Joi.object({
        uid: Joi.string().min(3).max(50).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        firebaseAuthenticationController.deleteUserProfile(req, res);
    }    
};



