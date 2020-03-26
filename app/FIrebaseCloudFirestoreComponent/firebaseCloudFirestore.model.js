var firebaseSettings = require('../../config/firebaseConfig');
var dbFirestore = firebaseSettings.firestore();

exports.getAllUser = async function (result) {
    const snapshot = await dbFirestore.collection('users').get();
    let resultGetAllUser = snapshot.docs.map(doc => doc.data());
    result(null, resultGetAllUser);  
};

exports.getUserById = function (userId, result) {
    dbFirestore.collection('users').doc(userId).get().then((doc) => {
        if (!doc.exists) {
            let resultGetUserById = { message: 'No such document!' };
            result(null, resultGetUserById);
        } else {
            result(null, doc.data());
        }
    }).catch(error => {
        result(null, error);
    });
};

exports.addUser = function (body, result) {
    let docRef = dbFirestore.collection('users').doc();
    let setDoc = docRef.set({
        name: body.name,
        address: body.address,
        email: body.email,
        mobileNo: body.mobileNo
    }).then(()=> {
        let resultAddUser = { message: 'User Inserted Successfully' };
        result(null, resultAddUser);
    }).catch((error)=>{
        console.log(error); 
        let resultAddUser = { message: 'User not inserted' };
        result(null, resultAddUser);
    });   
};

exports.updateUser = function (body, result) {
    dbFirestore.collection('users').doc(body.userId).get().then((snapshot) => {
        if (snapshot.exists) {
            let docRef = dbFirestore.collection('users').doc(body.userId);
            docRef.update({
                name: body.name,
                address: body.address,
                email: body.email,
                mobileNo: body.mobileNo
            }).then(()=> {
                let resultUpdateUser = { message: 'UserInfo Updated Successfully' };
                result(null, resultUpdateUser);
            }).catch(()=>{
                let resultUpdateUser = { message: 'UserInfo Not Updated' };
                result(null, resultUpdateUser); 
            });
        } else {
            let resultUpdateUser = { message: 'User Not Found' };
            result(null, resultUpdateUser);
        }
    });
};

exports.deleteUserById =  function (userId, result) {
    dbFirestore.collection('users').doc(userId).get().then((snapshot) => {
        if (snapshot.exists) {
            let docRef = dbFirestore.collection('users').doc(userId);
            docRef.delete().then(()=> {
                let resultDeleteUserById = { message: 'User Deleted Successfully' };
                result(null, resultDeleteUserById);
            }).catch(()=>{
                let resultDeleteUserById = { message: 'User Not Deleted' };
                result(null, resultDeleteUserById);
            });
        } else {
            let resultDeleteUserById = { message: 'User Not Found' };
            result(null, resultDeleteUserById);
        }
    });
};

