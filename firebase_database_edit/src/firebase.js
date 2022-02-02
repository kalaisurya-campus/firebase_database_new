// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB41aivSxLnVK2HBO08UMlAYkL--vn979o",
  authDomain: "database-use-cd30b.firebaseapp.com",
  projectId: "database-use-cd30b",
  storageBucket: "database-use-cd30b.appspot.com",
  messagingSenderId: "773588793389",
  appId: "1:773588793389:web:d0bf3c0081f643f68ea0a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
