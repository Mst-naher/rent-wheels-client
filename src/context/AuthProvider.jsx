import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUserWithEmailAndPasswordFunc = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {displayName, photoURL});
  };

  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutFunc =()=>{
    setLoading(true);
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    signOutFunc,
    loading,
    setLoading,
  };
     
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setUser(currUser);
      setLoading(false)
    });

    return ()=>{
      unsubscribe();
    }

  },[])
  

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
