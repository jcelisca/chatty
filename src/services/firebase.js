import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB2zsXifx5s8d4bzjlvxp081jG6rB2LO8o",
  authDomain: "chatty-7e44e.firebaseapp.com",
  projectId: "chatty-7e44e",
  storageBucket: "chatty-7e44e.appspot.com",
  messagingSenderId: "301064549830",
  appId: "1:301064549830:web:b9dca8f6f33f484ef3eec7"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
export default firebaseApp;