// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyCK7HXaXZJ7Ck3LTUVnw7IMWiE17V4XyOg",
    authDomain: "aura-textil.firebaseapp.com",
    projectId: "aura-textil",
    storageBucket: "aura-textil.firebasestorage.app",
    messagingSenderId: "685345421168",
    appId: "1:685345421168:web:73d8d6463cd697f55a41b5",
    measurementId: "G-YDRB5FRMLM"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// const analytics = getAnalytics(FirebaseApp);