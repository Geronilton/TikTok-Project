// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyChOo8dyyef5POYeqTT9dh672Ud4JPwc8I",
  authDomain: "tiktok---jornada-26d8a.firebaseapp.com",
  projectId: "tiktok---jornada-26d8a",
  storageBucket: "tiktok---jornada-26d8a.appspot.com",
  messagingSenderId: "624224962587",
  appId: "1:624224962587:web:c29e2de2fcb2df9f38d0be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db