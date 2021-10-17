import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="main-nav">
        {/* <p className="logo">BookRev.</p> */}
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Wallet</a>
      </nav>
      <div className="session-nav">
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
