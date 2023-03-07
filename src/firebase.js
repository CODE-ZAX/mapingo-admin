// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIfRMlm_B4lhs2R6EMUQqa_s0PXsMQwXI",
  authDomain: "mapingo-admin.firebaseapp.com",
  projectId: "mapingo-admin",
  storageBucket: "mapingo-admin.appspot.com",
  messagingSenderId: "640797683410",
  appId: "1:640797683410:web:2e34437f56eedc1fa4c70b",
  measurementId: "G-J9PS1CQD80",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
