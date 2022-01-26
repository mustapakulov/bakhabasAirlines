import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login/Login";
import Register from "./component/Auth/Register/Register";
import DisplayCard from "./component/CRUT/DisolayCard/DisplayCard";
import KaruselNavigate from "./component/Karuselnav/KaruselNavigate";
import MyContextProvider from "./component/MyContext/MyContext";
import MyNavbar from "./component/MyNavbar/MyNavbar";
const MyRoutes = () => {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/display" element={<DisplayCard />} />
          <Route path="/Karusel" element={<KaruselNavigate />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
};

export default MyRoutes;
