// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7-jCE6ChiRecb05c0J8llcNWeHuinRIU",
  authDomain: "foods-98283.firebaseapp.com",
  databaseURL: "https://foods-98283-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "foods-98283",
  storageBucket: "foods-98283.firebasestorage.app",
  messagingSenderId: "274670275958",
  appId: "1:274670275958:web:f218ab3e61e786e26dfe57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;