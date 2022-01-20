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
        <div className={menu==="access"? "greenFont":null} ><h2 className="links-config">Accesos</h2></div>
        <div className={menu==="data&privacy"? "greenFont":null} ><h2 className="links-config">Data y Privacidad</h2></div>
        <div className={menu==="notifications"? "greenFont":null} ><h2 className="links-config">Notificaciones</h2></div>
        <div className={menu==="payments"? "greenFont":null} ><h2 className="links-config">Pago</h2></div>
      </div>

{
//Para cuando sea un menú interactivo
/* 
    onClick={()=>{setMenu("access")}}
    onClick={()=>{setMenu("data&privacy")}}
    onClick={()=>{setMenu("notifications")}}
    onClick={()=>{setMenu("payments")}} 
*/}

    {menu==="profile"?<Profile/>:null}


    </div>

  </div>);
};

export default Settings;
