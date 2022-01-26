import React from "react";
import Footer from "../Footer/Footer";
import HeadersHome from "../HeadersHome/HeadersHome";
import Journey from "../Journey/Journey";
import KaruselNavigate from "../Karuselnav/KaruselNavigate";

const Home = () => {
  return (
    <div>
      <HeadersHome />
      <KaruselNavigate />
      <Journey />
      <Footer/>
    </div>
  );
};

export default Home;
