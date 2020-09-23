import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDS5iMNxwk541BPSxlgu-m-TCMe1qFbPw",
  authDomain: "clone-980b8.firebaseapp.com",
  databaseURL: "https://clone-980b8.firebaseio.com",
  projectId: "clone-980b8",
  storageBucket: "clone-980b8.appspot.com",
  messagingSenderId: "626544904853",
  appId: "1:626544904853:web:a534584aa7759046b9299c",
  measurementId: "G-SXWCHRL5SL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
