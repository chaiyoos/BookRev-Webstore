import React from "react";
import "./style.css";
import img from "../../assets/read1.png";
const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h3 className="welcome">Welcome to</h3>
        <h1 className="bookrev">BookRev.</h1>
        <p className="description">
          A decentralised fair playground for all bookworms!
        </p>
        <div className="o-box"></div>
      </div>
      <img src={img} alt="hero img1" className="hero-img" />
    </div>
  );
};

export default Hero;
