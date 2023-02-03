// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClMaaR9IoaxJy9_4-9yyzpXJOn5BZLVho",
  authDomain: "shoppinglist-app-61f0c.firebaseapp.com",
  projectId: "shoppinglist-app-61f0c",
  storageBucket: "shoppinglist-app-61f0c.appspot.com",
  messagingSenderId: "891438547680",
  appId: "1:891438547680:web:e84789f575f601f3780685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)