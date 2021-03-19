import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAFmkET-_1pt_E9ygW7TrPGP1niH38oyvY",
  authDomain: "twitter-clone-e009a.firebaseapp.com",
  projectId: "twitter-clone-e009a",
  storageBucket: "twitter-clone-e009a.appspot.com",
  messagingSenderId: "713559027421",
  appId: "1:713559027421:web:e61a930c6436fefdcdf534",
  measurementId: "G-NJSR5YHVY7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

//  -->  2:42
