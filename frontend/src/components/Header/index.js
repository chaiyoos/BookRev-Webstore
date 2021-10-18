import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = (props) => {
  const [search, setSearch] = useState(false);

  const changeFocus = () => {
    setSearch(!search);
  };

  const searchClass = search ? "class-inp active" : "class-inp";
  const searchIconClass = search
    ? "bi bi-search search-icon active"
    : "bi bi-search search-icon inactive";

  return (
    <header className="header">
      <div className="navbar row">
        <div className="col-2 logo-container">
          <p className="logo">BookRev.</p>
        </div>
        <div className="main-nav col-3">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/wallet">Wallet</Link>
        </div>
        <div className="session-nav col-2">
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="row search-container justify-content-center">
        <div className="col-6 search">
          <input
            onFocus={changeFocus}
            onBlur={changeFocus}
            type="text"
            placeholder="search the library..."
            className={searchClass}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class={searchIconClass}
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
