import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_CBZm9QxZyL1u80mGvyTEwnqyz5hFoUQ",
  authDomain: "ktam-995ae.firebaseapp.com",
  projectId: "ktam-995ae",
  storageBucket: "ktam-995ae.appspot.com",
  messagingSenderId: "720487647076",
  appId: "1:720487647076:web:afc9421b1f0779f2795c71"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {db};