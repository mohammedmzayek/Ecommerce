// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkVK5l-mNcpKY7vgURQ6vYz0CLxBYwIXU",
  authDomain: "ecommerce-1d45c.firebaseapp.com",
  projectId: "ecommerce-1d45c",
  storageBucket: "ecommerce-1d45c.appspot.com",
  messagingSenderId: "626167904862",
  appId: "1:626167904862:web:3e95af61e64c1b6e2a12cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
