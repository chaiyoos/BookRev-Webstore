import React from "react";
import Hero from "../../components/Hero";
import Info from "../../components/Info";
import "./style.css";

const Home = (props) => {
  return (
    <div>
      <Hero />
      <Info />
    </div>
  );
};

export default Home;
