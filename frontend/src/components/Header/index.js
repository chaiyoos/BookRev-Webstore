import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="navbar row">
        <div className="col-2 logo-container">
          <p className="logo">BookRev.</p>
        </div>
        <div className="main-nav col-3">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Wallet</a>
        </div>
        <div className="session-nav col-2">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
      <div className="row search-container justify-content-center">
        <div className="col-6 search">
          <input
            type="text"
            placeholder="search the library..."
            className="class-inp"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
