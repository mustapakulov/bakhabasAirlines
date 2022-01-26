import React from "react";
import DisplayList from "../CRUT/DisplayList/DisplayList";
import HeadersHome from "../HeadersHome/HeadersHome";
import KaruselNavigate from "../Karuselnav/KaruselNavigate";

const Home = () => {
  return (
    <div>
      <HeadersHome />
      <KaruselNavigate />
      <DisplayList />
    </div>
  );
};

export default Home;
