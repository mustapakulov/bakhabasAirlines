import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Navbar />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
