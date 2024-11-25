// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTlhqM34r-AnWt9pTTyEzMcOxEskdwvNI",
  authDomain: "confession-note-703a4.firebaseapp.com",
  databaseURL: "https://confession-note-703a4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confession-note-703a4",
  storageBucket: "confession-note-703a4.firebasestorage.app",
  messagingSenderId: "674577736619",
  appId: "1:674577736619:web:2c67470a00453880b368ee",
  measurementId: "G-S5TC9BLXXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export{database, set, ref, onValue}