import { useState, useEffect } from 'react'
import {firebase,database} from './firebase';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false)
      return;
    }
    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
    window.sessionStorage.setItem("auth",JSON.stringify(authState))
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };


  // Sign In
  const signInWithEmailAndPassword = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);


   // Register Here
  const userRegistration = async (name, email, password) => {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await   database.ref("users").child(user.uid).set({
        name,
        authProvider: "local",
        email,
        usertype:"customer"
      });
     
    };
   // Signout Here
  const signOut = () =>
    firebase.auth().signOut().then(clear);


   // Auto Signout  Here
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    userRegistration,
    signOut
  };
}