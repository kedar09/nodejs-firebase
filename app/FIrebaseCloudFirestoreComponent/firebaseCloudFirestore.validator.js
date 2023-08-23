const Joi = require("@hapi/joi")
  .extend(require("@hapi/joi-date"))
  .extend(require("joi-phone-number"));

var firebaseCloudFirestoreController = require("./firebaseCloudFirestore.controller");

exports.getAllUser = function (req, res) {
  firebaseCloudFirestoreController.getAllUser(req, res);
};

exports.getAllTask = function (req, res) {
    firebaseCloudFirestoreController.getAllTask(req, res);
  };

exports.getUserById = async function (req, res) {
  let data = req.params;
  console.log(req.params)
  const schema = Joi.object({
    userId: Joi.string().min(3).max(50).required(),
  });
  const { error } = await schema.validate(data);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    firebaseCloudFirestoreController.getUserById(req, res);
  }
};

exports.addUser = async function (req, res) {
  try {
    let data = req.body;
      firebaseCloudFirestoreController.addUser(req, res);
    
  } catch (err) {
    console.log(err);
  }
};

exports.addTask = async function (req, res) {
    try {
      let data = req.body;
        firebaseCloudFirestoreController.addTask(req, res);
      
    } catch (err) {
      console.log(err);
    }
  };

exports.updateUser = async function (req, res) {
  let data = req.body;
//   const schema = Joi.object({
//     userId: Joi.string().min(3).max(50).required(),
//     name: Joi.string().min(3).max(50).required(),
//     address: Joi.string().min(3).max(50).required(),
//     email: Joi.string()
//       .email({
//         minDomainSegments: 2,
//         tlds: { allow: ["com", "net"] },
//       })
//       .required(),
//     mobileNo: Joi.string().phoneNumber().length(13).required(),
//   });
//   const { error } = await schema.validate(data);
//   if (error) {
//     res.status(400).send({ error: error.details[0].message });
//   } else {
    firebaseCloudFirestoreController.updateUser(req, res);
//   }
};

exports.deleteUserById = async function (req, res) {
  let data = req.params;
  const schema = Joi.object({
    userId: Joi.string().min(3).max(50).required(),
  });
  const { error } = await schema.validate(data);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    firebaseCloudFirestoreController.deleteUserById(req, res);
  }
};
