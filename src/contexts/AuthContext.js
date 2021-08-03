import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new firebase.auth.GoogleAuthProvider();

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function authWithGoogle() {
    return auth.signInWithRedirect(provider);
  }

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut() {
    return auth.signOut();
  }

  // function resetPassword(email) {
  //     return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //     return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //     return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    // We only want this to run when we mount our Component!
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logIn,
    signUp,
    logOut,
    authWithGoogle,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
