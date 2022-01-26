import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login/Login";
import Register from "./component/Auth/Register/Register";
<<<<<<< HEAD
import AddTicket from "./component/CRUT/AddTicket/AddTicket";
=======
import DisplayCard from "./component/CRUT/DisolayCard/DisplayCard";
>>>>>>> 8539b572d58a9def4c237393bfaabad837abd141
import MyContextProvider from "./component/MyContext/MyContext";
import MyNavbar from "./component/MyNavbar/MyNavbar";
const MyRoutes = () => {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
          <Route path='/login' element={<Login/>}/>
          <Route path='/add' element={<AddTicket/>} />
=======
          <Route path="/login" element={<Login />} />
          <Route path="/display" element={<DisplayCard />} />
>>>>>>> 8539b572d58a9def4c237393bfaabad837abd141
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
};

export default MyRoutes;
