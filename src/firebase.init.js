// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfJqFdT5ytppwyQbBjf8pDDhKyvb7KTXA",
  authDomain: "assignment-10-lawyer.firebaseapp.com",
  projectId: "assignment-10-lawyer",
  storageBucket: "assignment-10-lawyer.appspot.com",
  messagingSenderId: "233619679049",
  appId: "1:233619679049:web:a32798183d2e97acd5dc98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
