import React from "react";
import {Link} from 'react-router-dom';
import houseIcon  from '../../assets/houseIcon.jpg';
import settingsIcon  from '../../assets/settingsIcon.jpg';
import upIcon  from '../../assets/upIcon.jpg';
import usersIcon  from '../../assets/usersIcon.jpg';
import olasDashboard  from '../../assets/olasDashboard.jpg';


import "./Nav.css";

const Nav = () => {
  return (<nav>
    <ul className="list-container">
      <Link to="/"><li className="li-house"><img className="house-icon" src={houseIcon} alt="houseIcon" />Home</li></Link>       
      <Link to="/reporting"><li className="li-up"><img className="up-icon" src={upIcon} alt="upIcon" />Reporte</li></Link>
      <Link to="/staff"><li className="li-user"><img className="user-icon" src={usersIcon} alt="usersIcon" />Empleados</li></Link>     
      <Link to="/config"><li className="li-settings"><img className="settings-icon" src={settingsIcon} alt="settingsIcon" />Configuraciones</li></Link> 
    </ul>
    <img className="img-olas" src={olasDashboard} alt="olasDashboard" />
    
</nav>);
};

export default Nav;
