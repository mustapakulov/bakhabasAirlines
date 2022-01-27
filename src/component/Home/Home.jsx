import React from "react";
import FooterFot from "../Footer/FooterFot";
import FoterFrom from "../Footer/FooterFrom";
import HeadersHome from "../HeadersHome/HeadersHome";
import Journey from "../Journey/Journey";
import KaruselNavigate from "../Karuselnav/KaruselNavigate";

const Home = () => {
  return (
    <div>
      <HeadersHome />
      <KaruselNavigate />
      <Journey />
      <FoterFrom/>
      <FooterFot />
    </div>
  );
};

export default Home;
