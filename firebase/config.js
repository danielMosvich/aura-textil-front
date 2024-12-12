// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const key = import.meta.env.VITE_FIREBASE_API_KEY
const firebaseConfig = {
    apiKey: key,
    authDomain: "aura-textil-7bfc3.firebaseapp.com",
    projectId: "aura-textil-7bfc3",
    storageBucket: "aura-textil-7bfc3.firebasestorage.app",
    messagingSenderId: "431144606432",
    appId: "1:431144606432:web:3100cabf7158f33723ce85",
    measurementId: "G-05HBNF5JGV"
  };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// const analytics = getAnalytics(FirebaseApp);