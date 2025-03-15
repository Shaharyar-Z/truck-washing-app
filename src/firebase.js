// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe3ZgFf5WYO_vWxCRzDxvlHfz7T1A9Mc0",
  authDomain: "fleetex-7dc57.firebaseapp.com",
  projectId: "fleetex-7dc57",
  storageBucket: "fleetex-7dc57.firebasestorage.app",
  messagingSenderId: "605000419571",
  appId: "1:605000419571:web:066a5705722fc7eb1a0f86",
  measurementId: "G-3YFZFQP0SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);