// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlMj5Ln9nqxILa3eoGuzs7Kddw6teCiO0",
  authDomain: "alarakha-a3f75.firebaseapp.com",
  projectId: "alarakha-a3f75",
  storageBucket: "alarakha-a3f75.appspot.com",
  messagingSenderId: "1076644872321",
  appId: "1:1076644872321:web:b53603572732dd8b468d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)