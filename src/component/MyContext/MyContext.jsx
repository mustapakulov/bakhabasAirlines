import React, { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../Firebase';
import axios from 'axios';
import { API } from '../../Halpers'
import { Icons, toast } from 'react-toastify'

export const tiketContext = createContext()

const INIT_STATE = {
   tiket: null,
   edit: null
}
const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "GET_TIKET" :
            return {...state, tiket: action.payload}
        case "EDIT_TIKET":
            return {...state, edit: action.payload}
        default : return state
    }
}

const MyContext = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    // ! create
    const addTiket = async (newTiket) => {
        try {
            let res = await axios.post(API, newTiket)
            getTiket()
            toast.success("oops", {icon: '🚀'})
            return res
        } catch (error) {
            toast.error(error)
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
    // ! edit || update
    const editTiket = async (id) => {
        try {
            let { data } = await axios(`${API}/${id}`)
            let action = {
                type: 'EDIT_TIKET',
                payload: data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
    // ! save 
    const saveEditTiket =  async (editedTiket) => {
        try {
            await axios.patch(`${API}/${editedTiket.id}`, editedTiket)
            getTiket()
        } catch (error) {
            
        }
    }
    // ! delete 
    const deleteTiket = async (id) => {
        try {
            await axios.delete(`${API}/${id}`)
            getTiket()
        } catch (error) {
            // ! toastify
            console.log(error);
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
        tiket: state.tiket,
        edit: state.edit,
        //  sign
        signUp,
        signIn,
        logout,
        useAuth,
        // Crud
        addTiket,
        getTiket,
        editTiket,
        saveEditTiket,
        deleteTiket,
        // 
       }}>
           {props.children}
       </tiketContext.Provider>
    );
};

export default MyContext;