import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_wq9lIrhJr1A1rig1PxyttE-H1z-bfx0",
  authDomain: "clone-91762.firebaseapp.com",
  projectId: "clone-91762",
  storageBucket: "clone-91762.appspot.com",
  messagingSenderId: "197952518731",
  appId: "1:197952518731:web:f596f00dd4fb8cf6a2ebce",
  measurementId: "G-DMTX6ZG7FE"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }