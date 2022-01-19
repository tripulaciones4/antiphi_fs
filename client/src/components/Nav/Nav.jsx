import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import houseIcon  from '../../assets/houseIcon.jpg';
import settingsIcon  from '../../assets/settingsIcon.jpg';
import upIcon  from '../../assets/upIcon.jpg';
import usersIcon  from '../../assets/usersIcon.jpg';
import olasDashboard  from '../../assets/olasDashboard.jpg';
import "./Nav.css";

// import { userContext} from '../../context/userContext';


const Nav = (props) => {

  const [ menuActiveHome, setMenuActiveHome] = useState(false);

  const setMenuStateHome = (event)=>{
    event.preventDefault();
    menuActiveHome === false ? setMenuActiveHome(true) : setMenuActiveHome(false);
  }

  return (<nav>
    <ul className="list-container">
      <Link to="/"><li onClick={setMenuStateHome} className="li-house"><img className="house-icon" src={`${menuActiveHome ? houseIcon : upIcon}`} alt="houseIcon" />Home</li></Link>
      <Link to="/reporting"><li className="li-up"><img className="up-icon" src={upIcon} alt="upIcon" />Reporte</li></Link>
      <Link to="/person"><li className="li-user"><img className="user-icon" src={usersIcon} alt="usersIcon" />Empleados</li></Link>     
      <Link to="/config"><li className="li-settings"><img className="settings-icon" src={settingsIcon} alt="settingsIcon" />Configuraciones</li></Link> 
    </ul>
    <img className="img-olas" src={olasDashboard} alt="olasDashboard" />
    
</nav>);
};

export default Nav;
