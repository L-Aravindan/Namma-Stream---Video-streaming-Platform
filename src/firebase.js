// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,serverTimestamp} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdKPYX7aGFkjYwFRxai-qkeaUcmPl138k",
  authDomain: "namma-stream-d1505.firebaseapp.com",
  projectId: "namma-stream-d1505",
  storageBucket: "namma-stream-d1505.appspot.com",
  messagingSenderId: "845347618832",
  appId: "1:845347618832:web:4b5dd9837c7d543554ca95",
  measurementId: "G-D2KENKEGKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore();
const auth= getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export {app,db,auth,timestamp,provider}