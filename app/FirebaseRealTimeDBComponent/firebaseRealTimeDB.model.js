var firebaseSettings = require('../../config/firebaseConfig');

exports.getAllUser = function (result) {
    let ref = firebaseSettings.database().ref('users');
    ref.once('value', function(snapshot) {
        result(null,snapshot.val());
    });
};

exports.getUserById = function (userId, result) {
    firebaseSettings.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        let name = (snapshot.val() && snapshot.val().name) || 'Anonymous';
        let email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
        let mobileNo = (snapshot.val() && snapshot.val().mobileNo) || 'Anonymous';
        let address = (snapshot.val() && snapshot.val().address) || 'Anonymous';
        let resultGetUser = [{'name': name,
                    'address':address,
                    'mobileNo':mobileNo,
                    'email':email
        }];
        result(null, resultGetUser);
    });
};


exports.addUser = function (body, result) {
    var postsRef = firebaseSettings.database().ref("users");
    postsRef.push().set({
        name: body.name,
        address: body.address,
        email: body.email,
        mobileNo: body.mobileNo
    }, function(error) {
        if (error) {
            result(error, null);
        } else {
            let resultAddUser = { message: 'User Inserted Successfully' };
            result(null, resultAddUser);
        }
    });
};

exports.updateUser = function (body, result) {
    let userId = body.userId;
    delete body.userId;
    firebaseSettings.database().ref('/users/' + userId).once('value', function(snapshot) {
        if (snapshot.exists()) {
            firebaseSettings.database().ref('users/' + userId).update({
                name: body.name,
                address: body.address,
                email: body.email,
                mobileNo: body.mobileNo
            }, function(error) {
                if (error) {
                    result(error, null);
                } else {
                    let resultUpdateUser = { message: 'UserInfo Updated Successfully' };
                    result(null, resultUpdateUser);
                }
            });
        } else {
            let resultUpdateUser = { message: 'User not found' };
            result(null, resultUpdateUser);
        }
    });
};

exports.deleteUserById =  function (userId, result) {
    firebaseSettings.database().ref('/users/' + userId).once('value', function(snapshot) {
        if (snapshot.exists()) {
            firebaseSettings.database().ref('users/' + userId).remove().then(()=>{
                let resultDeleteUserById = { message: 'User Deleted Successfully' };
                result(null, resultDeleteUserById);
            }).catch((error)=>{
                result(error, null);
            });
        }else{
            let resultDeleteUserById = { message: 'User not found' };
            result(null, resultDeleteUserById);
        }
    });

};

