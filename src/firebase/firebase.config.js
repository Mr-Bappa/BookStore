// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeeMKiXD0L3sqJ5pYj5hIl9XxbkuaTo94",
  authDomain: "mern-book-store-2595b.firebaseapp.com",
  projectId: "mern-book-store-2595b",
  storageBucket: "mern-book-store-2595b.appspot.com",
  messagingSenderId: "283233261172",
  appId: "1:283233261172:web:5182592164ba574cf4e321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;