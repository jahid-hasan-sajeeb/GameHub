// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw8Q_sLRgIKxfIm_AlldbRhCBE6rDwSwQ",
  authDomain: "fir-a-9.firebaseapp.com",
  projectId: "fir-a-9",
  storageBucket: "fir-a-9.firebasestorage.app",
  messagingSenderId: "620360978793",
  appId: "1:620360978793:web:0c0d8d6e1e0473322a6df8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();