// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY-vCowRyatnTxigZHncfmMwhR0cVqkyA",
  authDomain: "netflix-gpt-c8eae.firebaseapp.com",
  projectId: "netflix-gpt-c8eae",
  storageBucket: "netflix-gpt-c8eae.firebasestorage.app",
  messagingSenderId: "1092244256522",
  appId: "1:1092244256522:web:b262195bb97531a8922cf3",
  measurementId: "G-XMGY1SB3D5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
