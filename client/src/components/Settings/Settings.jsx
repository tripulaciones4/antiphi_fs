import React, { useState } from "react";
import Profile from "../Profile/Profile";
import "./Settings.css"



const Settings = () => {

  const [menu, setMenu] = useState("profile")

  return (
  <div className="reporting-container">
    
    <h1 className="title-reporting">Configuraciones</h1>
    
    <div className="container-position">
      <div id="menu-settings" className="menu-settings">
        <div className={menu==="profile"? "greenFont":null} onClick={()=>{setMenu("profile")}}><h2 className="profile-link">Perfil</h2></div>
        <div className={menu==="access"? "greenFont":null} onClick={()=>{setMenu("access")}}><h2 className="links-config">Accesos</h2></div>
        <div className={menu==="data&privacy"? "greenFont":null} onClick={()=>{setMenu("data&privacy")}}><h2 className="links-config">Data y Privacidad</h2></div>
        <div className={menu==="notifications"? "greenFont":null} onClick={()=>{setMenu("notifications")}}><h2 className="links-config">Notificaciones</h2></div>
        <div className={menu==="payments"? "greenFont":null} onClick={()=>{setMenu("payments")}}><h2 className="links-config">Pagos</h2></div>
      </div>

      {menu==="profile"?<Profile/>:null}

    </div>
  </div>);
};

export default Settings;
