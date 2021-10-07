import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
  // apiKey: "process.env.REACT_APP_FIREBASE_APIKEY",
  // authDomain: "process.env.REACT_APP_FIREBASE_AUTHDOMAIN",
  // projectId: "process.env.REACT_APP_FIREBASE_PROJECTID",
  // storageBucket: "process.env.REACT_APP_FIREBASE_STORAGEBUCKET",
  // messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID",
  // appId: "process.env.REACT_APP_FIREBASE_APPID",

  apiKey: "AIzaSyDTsJ7wc-gC_k5Z48tBeVa84J8XZidnDLk",
  authDomain: "icodegotravel.firebaseapp.com",
  projectId: "icodegotravel",
  storageBucket: "icodegotravel.appspot.com",
  messagingSenderId: "561986178947",
  appId: "1:561986178947:web:5fda1be03f6aa5bf78f0b6",
});

export const storage = firebase.storage();
export const Firestore = firebase.firestore();

export const auth = app.auth();
export default app;
