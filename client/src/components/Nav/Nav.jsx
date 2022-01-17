import React from "react";
import {Link} from 'react-router-dom';
import houseIcon  from '../../assets/houseIcon.jpg';
import settingsIcon  from '../../assets/settingsIcon.jpg';
import upIcon  from '../../assets/upIcon.jpg';
import usersIcon  from '../../assets/usersIcon.jpg';
import helpIcon  from '../../assets/helpIcon.jpg';
import logoutIcon  from '../../assets/logoutIcon.jpg';
import olasDashboard  from '../../assets/olasDashboard.jpg';


import "./Nav.css";

const Nav = () => {
  return (<nav>
    <ul className="list-container">
      <Link to="/"><li className="li-house"><img className="house-icon" src={houseIcon} alt="houseIcon" />Home</li></Link>       
      <Link to="/reporting"><li className="li-up"><img className="up-icon" src={upIcon} alt="upIcon" />Reporte</li></Link>
      <Link to="/person"><li className="li-user"><img className="user-icon" src={usersIcon} alt="usersIcon" />Empleados</li></Link>     
      <Link to="/config"><li className="li-settings"><img className="settings-icon" src={settingsIcon} alt="settingsIcon" />Configuraciones</li></Link> 
    </ul>

    <span>
    <Link to="/help"><p className="p-help"><img className="help-icon" src={helpIcon} alt="helpIcon" />Ayuda</p></Link>
    </span>
    
    <Link to="/"><button className="btn-logOut"><img className="icon-logOut" src={logoutIcon} alt="logoutIcon" />Log Out</button></Link>
    
    <img className="img-olas" src={olasDashboard} alt="olasDashboard" />
    
</nav>);
};

export default Nav;
