import firebase from "firebase/app";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD3HWB_wyZh9VRv7crQc7Si6IRgOxQNRKg",
  authDomain: "herokuapp-a45b4.firebaseapp.com",
  projectId: "herokuapp-a45b4",
  storageBucket: "herokuapp-a45b4.appspot.com",
  messagingSenderId: "437763182769",
  appId: "1:437763182769:web:4a3b556b955759aa0c9290",
  measurementId: "G-47421CJ55W"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

var storage = firebase.storage();
export { storage, firebase as default };
