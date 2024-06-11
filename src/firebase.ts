// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1RqgAiEPZ1wU2__Q2zkAyOGRShGoyjkE",
  authDomain: "react-shop-app-21a79.firebaseapp.com",
  projectId: "react-shop-app-21a79",
  storageBucket: "react-shop-app-21a79.appspot.com",
  messagingSenderId: "111175723132",
  appId: "1:111175723132:web:c01cd26720f04a7346c1f9",
  measurementId: "G-JYKBZCZR4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;