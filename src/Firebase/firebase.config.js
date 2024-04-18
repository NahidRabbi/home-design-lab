// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfNI_mjIq3Iz6SueMMP7zUpqGthb3uC14",
  authDomain: "home-design-lab.firebaseapp.com",
  projectId: "home-design-lab",
  storageBucket: "home-design-lab.appspot.com",
  messagingSenderId: "1053295444764",
  appId: "1:1053295444764:web:30e05d38713b3671d9f0d9",
  measurementId: "G-JHB9X9NRSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;