import React from "react";
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
    </div>
  );
};

export default Home;
