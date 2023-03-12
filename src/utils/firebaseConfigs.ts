import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const db = firebase.firestore;
export const auth = firebase.auth;
export const storage = firebase.storage;

const firebaseConfig = {
  apiKey: "AIzaSyDzrpzP2LkZgpeP1X6Sz23bpaJR3JZtAXM",
  authDomain: "dev-challenges-b1509.firebaseapp.com",
  projectId: "dev-challenges-b1509",
  storageBucket: "dev-challenges-b1509.appspot.com",
  messagingSenderId: "791287895860",
  appId: "1:791287895860:web:62ab6e6d68d61cde2db761",
  measurementId: "G-Z9M3CYS9N8",
};

firebase.initializeApp(firebaseConfig);
