import React, {useState} from 'react';
import {Link} from 'react-router-dom';

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

// import { userContext} from '../../context/userContext';


const Nav = (props) => {

  const [ menuActiveHome, setMenuActiveHome] = useState(false);
  const [ menuActiveUp, setMenuActiveUp] = useState(false);
  const [ menuActiveUsers, setMenuActiveUsers] = useState(false);
  const [ menuActiveSettings, setMenuActiveSettings] = useState(false);

  const setMenuStateHome = (event)=>{
    event.preventDefault();
    menuActiveHome === false ? setMenuActiveHome(true) : setMenuActiveHome(false);
    setMenuActiveUp(false);
    setMenuActiveUsers(false);
    setMenuActiveSettings(false)
  }

  const setMenuStateUp = (event)=>{
    event.preventDefault();
    menuActiveUp === false ? setMenuActiveUp(true) : setMenuActiveUp(false);
    setMenuActiveHome(false);
    setMenuActiveUsers(false);
    setMenuActiveSettings(false)
  }

  const setMenuStateUSers = (event)=>{
    event.preventDefault();
    menuActiveUsers === false ? setMenuActiveUsers(true) : setMenuActiveUsers(false);
    setMenuActiveHome(false);
    setMenuActiveUp(false);
    setMenuActiveSettings(false)
  }

  const setMenuStateSettings = (event)=>{
    event.preventDefault();
    menuActiveSettings === false ? setMenuActiveSettings(true) : setMenuActiveSettings(false);
    setMenuActiveHome(false);
    setMenuActiveUp(false);
    setMenuActiveUsers(false);
  }

  return (<nav>
    <ul className="list-container">
      <Link to="/"><li onClick={setMenuStateHome} className={`${menuActiveHome ? "li-houseClick" : "li-house"}`}><img className="house-icon" src={`${menuActiveHome ? houseIconWhite : houseIconBlue}`} alt="houseIcon" />Home</li></Link>
      <Link to="/reporting"><li onClick={setMenuStateUp} className={`${menuActiveUp ? "li-upClick" : "li-up"}`}><img className="up-icon" src={`${menuActiveUp ? upIconWhite : upIconBlue}`} alt="upIcon" />Reporte</li></Link>
      <Link to="/staff"><li onClick={setMenuStateUSers} className={`${menuActiveUsers ? "li-userClick" : "li-user"}`}><img className="user-icon" src={`${menuActiveUsers ? usersIconWhite : usersIconBlue}`} alt="usersIcon" />Empleados</li></Link>     
      <Link to="/config"><li onClick={setMenuStateSettings} className={`${menuActiveSettings ? "li-settingsClick" : "li-settings"}`}><img className="settings-icon" src={`${menuActiveSettings ? settingsIconWhite : settingsIconBlue}`} alt="settingsIcon" />Configuraciones</li></Link> 
    </ul>
    <img className="img-olas" src={olasDashboard} alt="olasDashboard" />
    
</nav>);
};

export default Nav;
