import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkklH-84-PX4exqwms8H9MQn9As4D1_Nw",
  authDomain: "federicodesia-movies-app.firebaseapp.com",
  projectId: "federicodesia-movies-app",
  storageBucket: "federicodesia-movies-app.appspot.com",
  messagingSenderId: "542472618144",
  appId: "1:542472618144:web:ba93ff44172a34a2c389c5"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDb = getFirestore(firebaseApp)