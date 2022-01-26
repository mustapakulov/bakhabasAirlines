import React, { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../Firebase';
import axios from 'axios';
import { API } from '../../Halpers'

export const tiketContext = createContext()

const INIT_STATE = {
   tiket: null
}
const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "GET_TIKET" :
            return {...state, tiket: action.payload}
    }
}

const MyContext = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    // ! create
    const addTiket = async (newTiket) => {
        try {
            let res = await axios.post(API, newTiket)
            getTiket()
        } catch (error) {
            // ! toastify
        }
    }
    // ! read
    const getTiket = async () => {
        try {
           let res = await axios(API)
           let action = {
               type: "GET_TIKET",
               payload: res.data
           } 
           dispatch(action)
        } catch (error) {
            // ! Error
        }
    }

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
        useAuth,
        // Crud
        addTiket,
        getTiket
       }}>
           {props.children}
       </tiketContext.Provider>
    );
};

export default MyContext;