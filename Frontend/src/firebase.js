// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq1h4j5FL4LxKuDMfegFQkd_RxsZ29XWs",
  authDomain: "carebridge-6be5e.firebaseapp.com",
  projectId: "carebridge-6be5e",
  storageBucket: "carebridge-6be5e.appspot.com",
  messagingSenderId: "644649463747",
  appId: "1:644649463747:web:2385884544b136eea29776",
  measurementId: "G-P6YZ7T886Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;