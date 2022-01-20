import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import houseIconWhite  from '../../assets/houseIconWhite.jpg';
import houseIconBlue  from '../../assets/houseIconBlue.jpg';

import settingsIconWhite  from '../../assets/settingsIconWhite.jpg';
import settingsIconBlue  from '../../assets/settingsIconBlue.jpg';

import upIconWhite  from '../../assets/upIconWhite.jpg';
import upIconBlue  from '../../assets/upIconBlue.jpg';

import usersIconWhite  from '../../assets/usersIconWhite.jpg';
import usersIconBlue  from '../../assets/usersIconBlue.jpg';

import olasDashboard  from '../../assets/olasDashboard.jpg';
import "./Nav.css";



const Nav = (props) => {
  
  const location = useLocation().pathname;


  return (<nav>
    <ul className="list-container">
      <Link to="/home" ><li className={`${ location ==="/home" ? "li-houseClick" : "li-house"}`}><img className="house-icon" src={`${ location ==="/home" ? houseIconWhite : houseIconBlue}`} alt="houseIcon" />Home</li></Link>

      <Link to="/reporting">
        <li className={`${ location ==="/reporting" ? "li-upClick" : "li-up"}`}>
          <img className="up-icon" src={`${location ==="/reporting" ? upIconWhite : upIconBlue}`} alt="upIcon" />
          Reporte
        </li>
      </Link>

      <Link to="/staff"><li className={`${location ==="/staff" ? "li-userClick" : "li-user"}`}><img className="user-icon" src={`${location ==="/staff" ? usersIconWhite : usersIconBlue}`} alt="usersIcon" />Empleados</li></Link>

      <Link to="/settings">
        <li className={`${location ==="/settings" ? "li-settingsClick" : "li-settings"}`}>
            <img className="settings-icon" src={`${location ==="/settings" ? settingsIconWhite : settingsIconBlue}`} alt="settingsIcon" />
          Configuraciones
        </li>
      </Link> 
    </ul>
    <img className="img-olas" src={olasDashboard} alt="olasDashboard" />
    
</nav>);
};

export default Nav;
