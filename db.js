// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH7b26zQ6JBfO7AtI6KGI1yD-mn_U7SMg",
  authDomain: "web-tech-task-5.firebaseapp.com",
  projectId: "web-tech-task-5",
  storageBucket: "web-tech-task-5.appspot.com",
  messagingSenderId: "1005511262171",
  appId: "1:1005511262171:web:78d369d06a451b76d1f1fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
