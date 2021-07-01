import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
