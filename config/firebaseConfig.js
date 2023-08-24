var admin = require("firebase-admin");
var serviceAccount = require("../serviceKey.json");

var firebaseSettings = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://manegeo-b4370-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = firebaseSettings;
