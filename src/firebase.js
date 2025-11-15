import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAv_Oxx2IU7rzdHPMdv-rW-VjMGgCM9k",
  authDomain: "fullstackers-5143d.firebaseapp.com",
  projectId: "fullstackers-5143d",
  storageBucket: "fullstackers-5143d.appspot.com",
  messagingSenderId: "379761841637",
  appId: "1:379761841637:web:a93640911ab1c571594b0c"
};

// Initialize Firebase


// Initialize Firebase

export const app = initializeApp(firebaseConfig); // <- NOMBRE EXACTO: app
export const auth = getAuth(app);
export const db  = getFirestore(app);