// Import the functions you need from the SDKs you need
import firebase from 'firebase';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbVt729R7OdMe3sxaDkRoyjkGI1d5ysM4",
  authDomain: "nano-test-6d23e.firebaseapp.com",
  projectId: "nano-test-6d23e",
  storageBucket: "nano-test-6d23e.appspot.com",
  messagingSenderId: "157156641359",
  appId: "1:157156641359:web:bf11ffc98f463f78edf83a",
  measurementId: "G-DN5X83FFYF",
  databaseURL: "https://nano-test-6d23e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// const analytics = getAnalytics(app);
const database = firebase.database();

export {firebase,database};