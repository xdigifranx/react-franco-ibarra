// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-qZjhgguJH2u9uF6uD0YuELmJw6RI1uc",
  authDomain: "remerix-9892d.firebaseapp.com",
  projectId: "remerix-9892d",
  storageBucket: "remerix-9892d.appspot.com",
  messagingSenderId: "1051556440567",
  appId: "1:1051556440567:web:6691dabef8b46b440726f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);