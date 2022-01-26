import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login/Login";
import Register from "./component/Auth/Register/Register";
import AddTicket from "./component/CRUT/AddTicket/AddTicket";
import DisplayList from "./component/CRUT/DisplayList/DisplayList";
import EditTiket from "./component/CRUT/EditTiket/EditTiket";
import MyContextProvider from "./component/MyContext/MyContext";
import MyNavbar from "./component/MyNavbar/MyNavbar";
const MyRoutes = () => {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/add' element={<AddTicket/>} />
          <Route path="/login" element={<Login />} />
          <Route path='/list' element={<DisplayList/>} />
          <Route path='/list/edit/:id' element={<EditTiket/>} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
};

export default MyRoutes;
