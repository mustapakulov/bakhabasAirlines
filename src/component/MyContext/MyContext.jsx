import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../Firebase';
export const tiketContext = createContext()

const MyContext = (props) => {
    //  ! signIn/signUp
    function signUp (email, password) {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn (email, password) {
       return  signInWithEmailAndPassword(auth, email, password)
    }
    function logout () {
        return signOut(auth)
    }
    function useAuth  () {
        const [currentUser, setCurrentUser] = useState()
    
        useEffect(() => {
            const unsub = onAuthStateChanged(auth, user => {
                setCurrentUser(user)
            })
            return unsub;
        }, [])
        return currentUser
    }
    useAuth()
    return (
       <tiketContext.Provider value={{
        //  sign
        signUp,
        signIn,
        logout,
        useAuth
       }}>
           {props.children}
       </tiketContext.Provider>
    );
};

export default MyContext;