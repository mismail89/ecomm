// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_firebase_key,
  authDomain: "mern-auth-e145e.firebaseapp.com",
  projectId: "mern-auth-e145e",
  storageBucket: "mern-auth-e145e.appspot.com",
  messagingSenderId: "275259713877",
  appId: "1:275259713877:web:add7135608d32bce5967dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);