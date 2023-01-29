import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPJIxCc2ofqFohxIo0bFkxUDYHAj17MSE",
  authDomain: "the-movies-1b732.firebaseapp.com",
  projectId: "the-movies-1b732",
  storageBucket: "the-movies-1b732.appspot.com",
  messagingSenderId: "762649779612",
  appId: "1:762649779612:web:111cb0808f47c11eaf3c59",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
