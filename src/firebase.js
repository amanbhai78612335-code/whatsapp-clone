// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_2AFakmMxgZrf-ed5J_6C98txytoHE2I",
  authDomain: "my-what-s-app-ee44f.firebaseapp.com",
  projectId: "my-what-s-app-ee44f",
  storageBucket: "my-what-s-app-ee44f.firebasestorage.app",
  messagingSenderId: "286527640123",
  appId: "1:286527640123:web:0e4ed85f7172fa1032021e",
  measurementId: "G-R0YRNYR098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
