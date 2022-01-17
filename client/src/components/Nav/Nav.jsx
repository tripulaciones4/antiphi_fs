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
      <li className="li-house"><img className="house-icon" src={houseIcon} alt="houseIcon" /><Link to="/">Home</Link></li>       
      <li className="li-up"><img className="up-icon" src={upIcon} alt="upIcon" /><Link to="/reporting">Reporte</Link></li>
      <li className="li-user"><img className="user-icon" src={usersIcon} alt="usersIcon" /><Link to="/person">Empleados</Link></li>     
      <li className="li-settings"><img className="settings-icon" src={settingsIcon} alt="settingsIcon" /><Link to="/config">Configuraciones</Link></li> 
       
    </ul>

    <p className="p-help"><img className="help-icon" src={helpIcon} alt="helpIcon" /><Link to="/help">Ayuda</Link></p>
    <button className="btn-logOut"><img className="icon-logOut" src={logoutIcon} alt="logoutIcon" /><Link className="hola"to="/">Log Out</Link></button>
    <img className="img-olas" src={olasDashboard} alt="olasDashboard" />
    
</nav>);
};

export default Nav;
