import React from "react";
import "./Header.css";
import logo  from '../../assets/logo.jpg';
import Nav from "../Nav/Nav";

const Header = () => {
  return <header>
        <img className="img-logo" src={logo} alt="logo" />
        <div className="nav-container"><Nav /></div>
    </header>;
};

export default Header;
