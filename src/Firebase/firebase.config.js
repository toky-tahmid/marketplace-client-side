// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyDt_UGhESrXpoppKOJT_RvKG1cB7wRJk",
  authDomain: "client-site-1f3aa.firebaseapp.com",
  projectId: "client-site-1f3aa",
  storageBucket: "client-site-1f3aa.appspot.com",
  messagingSenderId: "325200967891",
  appId: "1:325200967891:web:2a71cd90fe28d28ff73c26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;