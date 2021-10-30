import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyARvOtrW52auLQNqlvGVh3BIS--B7psW-w",
  authDomain: "habit-tracker-ts.firebaseapp.com",
  projectId: "habit-tracker-ts",
  storageBucket: "habit-tracker-ts.appspot.com",
  messagingSenderId: "945706197970",
  appId: "1:945706197970:web:34888a3efb8e525e3cde0b",
});

const db = firebase.firestore();
export default db;
