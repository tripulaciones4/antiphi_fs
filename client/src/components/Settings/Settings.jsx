import React, { useState } from "react";
import Profile from "../Profile/Profile";


const Settings = () => {

  const [menu, setMenu] = useState("profile")

  return (
  <div className="reporting-container">
    <h1 className="title-reporting">Configuraciones</h1>

    <div id="menu-settings">
      <div className={menu==="profile"? "greenFont":null} onClick={()=>{setMenu("profile")}}><h2>Perfil</h2></div>
      <div className={menu==="access"? "greenFont":null} onClick={()=>{setMenu("access")}}><h2>Accesos</h2></div>
      <div className={menu==="data&privacy"? "greenFont":null} onClick={()=>{setMenu("data&privacy")}}><h2>Data y Privacidad</h2></div>
      <div className={menu==="notifications"? "greenFont":null} onClick={()=>{setMenu("notifications")}}><h2>Notificaciones</h2></div>
      <div className={menu==="payments"? "greenFont":null} onClick={()=>{setMenu("payments")}}><h2>Pagos</h2></div>
    </div>

    {menu==="profile"?<Profile/>:null}
  </div>);
};

export default Settings;
