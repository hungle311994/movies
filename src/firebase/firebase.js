// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPJIxCc2ofqFohxIo0bFkxUDYHAj17MSE",
  authDomain: "the-movies-1b732.firebaseapp.com",
  projectId: "the-movies-1b732",
  storageBucket: "the-movies-1b732.appspot.com",
  messagingSenderId: "762649779612",
  appId: "1:762649779612:web:111cb0808f47c11eaf3c59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const googleLogin = (email, password) => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logOut = () => {
  return signOut(auth);
};
