import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Auth/Register/Register";
import MyContextProvider from "./component/MyContext/MyContext";
import MyNavbar from "./component/MyNavbar/MyNavbar";
const MyRoutes = () => {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
};

export default MyRoutes;
