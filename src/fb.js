import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDCSxJS59_3NRA7Lvt39TW4sVPsvlvsaoE",
  authDomain: "todo-ninja-8fd03.firebaseapp.com",
  databaseURL: "https://todo-ninja-8fd03.firebaseio.com",
  projectId: "todo-ninja-8fd03",
  storageBucket: "todo-ninja-8fd03.appspot.com",
  messagingSenderId: "721657154887",
  appId: "1:721657154887:web:07ecdb2107a37da7c2d062",
  measurementId: "G-E4SQK9CCMC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const db = firebase.firestore()

//db.settings({timestampsInSnapshots: true})

export default db