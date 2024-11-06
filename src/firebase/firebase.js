import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhIh5zCm9a4wdiOXNeGwDJ-v3C9YNsMT0",
  authDomain: "turnero-digital-33ada.firebaseapp.com",
  projectId: "turnero-digital-33ada",
  storageBucket: "turnero-digital-33ada.appspot.com",
  messagingSenderId: "433592395784",
  appId: "1:433592395784:web:f7421422af90f9b12309bd",
  measurementId: "G-P9XLRTBLM4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
