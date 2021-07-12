import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDmnHXb--iR1RypesV3YPEVy1O0699LJs8",
  authDomain: "isopenat.firebaseapp.com",
  projectId: "isopenat",
  storageBucket: "isopenat.appspot.com",
  messagingSenderId: "760070065579",
  appId: "1:760070065579:web:ed501d9b85f12d69d396ee",
  measurementId: "G-WJLCMSEJZW",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
