import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYFKpyYwqnUtMwRR1XOFzTjECZ5xbtkJA",
  authDomain: "tests-5693f.firebaseapp.com",
  projectId: "tests-5693f",
  storageBucket: "tests-5693f.appspot.com",
  messagingSenderId: "810181322867",
  appId: "1:810181322867:web:087555c6e9ccb8f37de206",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
