import React from 'react';
import {  BrowserRouter, Routes } from 'react-router-dom'
import MyNavbar from './component/MyNavbar/MyNavbar'
const MyRoutes = () => {
    return (
       <BrowserRouter>
         <MyNavbar/>
        <Routes>

        </Routes>
       </BrowserRouter>
    );
};

export default MyRoutes;