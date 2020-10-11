import firebase from "firebase/app";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyA1dd_WkmGmn0fWh4Kq8F_gKar84u5Jfsk",
  authDomain: "solutions-eaa28.firebaseapp.com",
  databaseURL: "https://solutions-eaa28.firebaseio.com",
  projectId: "solutions-eaa28",
  storageBucket: "solutions-eaa28.appspot.com",
  messagingSenderId: "481100749596",
  appId: "1:481100749596:web:d0bd4a96f04cae23cbb8d9",
  measurementId: "G-0EBZH85FED"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

var storage = firebase.storage();
export { storage, firebase as default };
