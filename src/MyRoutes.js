import React from 'react';
import {  BrowserRouter, Routes } from 'react-router-dom'
import Register from './component/Auth/Register/Register';
import MyNavbar from './component/MyNavbar/MyNavbar'
const MyRoutes = () => {
    return (
       <BrowserRouter>
         <MyNavbar/>
         <Register/>
        <Routes>

        </Routes>
       </BrowserRouter>
    );
};

export default MyRoutes;
