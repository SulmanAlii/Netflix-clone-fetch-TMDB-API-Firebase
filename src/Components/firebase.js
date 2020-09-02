import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB2C9z_3-mzRwlmaqPdjCcMpYM0lrFlWnQ",
    authDomain: "netflix-clone-14d12.firebaseapp.com",
    databaseURL: "https://netflix-clone-14d12.firebaseio.com",
    projectId: "netflix-clone-14d12",
    storageBucket: "netflix-clone-14d12.appspot.com",
    messagingSenderId: "21144252171",
    appId: "1:21144252171:web:66bf8c48e2e212c3c2fc0e",
    measurementId: "G-14EY0R2TYB"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;