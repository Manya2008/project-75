import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyATY-VsrP-pm67s9HJxyPAUdppEtyXLYEA",
  authDomain: "e-ride-48d11.firebaseapp.com",
  databaseURL: "https://e-ride-48d11-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-ride-48d11",
  storageBucket: "e-ride-48d11.appspot.com",
  messagingSenderId: "724225241893",
  appId: "1:724225241893:web:9b0097c2874005aa61e0cc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
