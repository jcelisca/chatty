import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2zsXifx5s8d4bzjlvxp081jG6rB2LO8o",
  authDomain: "chatty-7e44e.firebaseapp.com",
  projectId: "chatty-7e44e",
  storageBucket: "chatty-7e44e.appspot.com",
  messagingSenderId: "301064549830",
  appId: "1:301064549830:web:b9dca8f6f33f484ef3eec7"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
