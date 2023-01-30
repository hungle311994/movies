import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    return unSubscribe;
  }, []);

  return currentUser;
};
