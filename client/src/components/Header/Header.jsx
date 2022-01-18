import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";
import logo  from '../../assets/logo.jpg';
import Nav from "../Nav/Nav";
import helpIcon  from '../../assets/helpIcon.jpg';
import logoutIcon  from '../../assets/logoutIcon.jpg';

const Header = () => {
  return <header>
        <img className="img-logo" src={logo} alt="logo" />

        <div className="nav-container">
          <Nav />
        </div>

        <div className="span-container">
        <Link to="/help"><p className="p-help"><img className="help-icon" src={helpIcon} alt="helpIcon" />Ayuda</p></Link>
        <Link to="/"><button className="btn-logOut"><img className="icon-logOut" src={logoutIcon} alt="logoutIcon" />Log Out</button></Link>
        </div>
        
    </header>;
};

export default Header;
