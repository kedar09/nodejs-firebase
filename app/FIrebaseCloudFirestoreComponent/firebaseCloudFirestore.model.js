var firebaseSettings = require("../../config/firebaseConfig");
var dbFirestore = firebaseSettings.firestore();
const { v4: uuidv4 } = require("uuid");

exports.getAllUser = async function (result) {
  const snapshot = await dbFirestore.collection("user").get();
  let resultGetAllUser = snapshot.docs.map((doc) => doc.data());
  result(null, resultGetAllUser);
};

exports.getAllTask = async function (result) {
  const snapshot = await dbFirestore.collection("task").get();
  let resultGetAllUser = snapshot.docs.map((doc) => doc.data());
  result(null, resultGetAllUser);
};

exports.getUserById = function (data, result) {
    console.log("heree",data)
  dbFirestore
    .collection("users")
    .where("email", "==", data.email)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.data()) {
            console.log("heree1 ")
          if (
            doc.data().email == data.email &&
            doc.data().password == data.password
          ) {
            console.log("turur")
            result(null, doc.data());
          } else {
            result(null, "Invalid Credentials");
          }
        } else {
          let resultGetUserById = { message: "User Not Found" };
          result(null, resultGetUserById);
        }
      });
    })
    .catch((error) => {
      result(null, error);
    });
};

exports.addUser = function (body, result) {
  let docRef = dbFirestore.collection("users").doc();
  const userid = uuidv4();
  let setDoc = docRef
    .set({
      userId: userid,
      email: body.email,
      password: body.password,
    })
    .then((res) => {
      console.log("resss ", res);
      let resultAddUser = {
        message: "User Inserted Successfully",
        userId: userid,
      };
      result(null, resultAddUser);
    })
    .catch((error) => {
      console.log(error);
      let resultAddUser = { message: "User not inserted" };
      result(null, resultAddUser);
    });
};

exports.addTask = function (body, result) {
  let docRef = dbFirestore.collection("task").doc();
  let setDoc = docRef
    .set({
      userId: body.userId,
      taskId: uuidv4(),
      taskTitle: body.taskTitle,
      taskDiscription: body.taskDiscription,
      createdAt: body.createdAt,
      status: body.status,
    })
    .then(() => {
      let resultAddUser = { message: "Task Add Successfully" };
      result(null, resultAddUser);
    })
    .catch((error) => {
      console.log(error);
      let resultAddUser = { message: "Failed to add task" };
      result(null, resultAddUser);
    });
};

exports.updateUser = function (body, result) {
  dbFirestore
    .collection("users")
    .doc(body.userId)
    .get()
    .then((snapshot) => {
      if (snapshot.exists) {
        let docRef = dbFirestore.collection("task").doc(body.userId);
        docRef
          .update({
            name: body.name,
            address: body.address,
            email: body.email,
            mobileNo: body.mobileNo,
          })
          .then(() => {
            let resultUpdateUser = { message: "UserInfo Updated Successfully" };
            result(null, resultUpdateUser);
          })
          .catch(() => {
            let resultUpdateUser = { message: "UserInfo Not Updated" };
            result(null, resultUpdateUser);
          });
      } else {
        let resultUpdateUser = { message: "User Not Found" };
        result(null, resultUpdateUser);
      }
    });
};

exports.deleteUserById = function (userId, result) {
  dbFirestore
    .collection("task")
    .where("taskId", "==", userId)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.data()) {
          let docRef = dbFirestore.collection("task").doc(userId);
          docRef
            .then((snapshot) => {
              const batch = db.batch();
              snapshot.forEach((doc) => {
                batch.delete(doc.ref);
              });

              return batch.commit();
            })
            .catch(() => {
              let resultDeleteUserById = { message: "Task Not Deleted" };
              result(null, resultDeleteUserById);
            });
        }
      });
    });
};
