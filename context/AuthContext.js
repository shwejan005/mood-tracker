'use client';
import { auth, db } from '@/firebase'; // Assuming Firebase auth and db are initialized correctly
import React, { useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'; // Correct imports
import { doc, getDoc } from 'firebase/firestore'; // Firestore imports remain the same

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObject, setUserDataObject] = useState({});
  const [loading, setLoading] = useState(true);

  // Signup function
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Signin function
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout function
  function logout() {
    setUserDataObject({});
    setCurrentUser(null);
    return signOut(auth);
  }

  // Use effect to handle auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          console.log("No User Found")
          return;
        }
        // Fetch user data from Firestore
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        let fireBaseData = {};
        if (docSnap.exists()) {
          console.log("found user data");
          fireBaseData = docSnap.data();
          console.log(fireBaseData);
        }
        setUserDataObject(fireBaseData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userDataObject,
    signup,
    logout,
    signin,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
