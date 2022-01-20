import React , { useState }from "react";
import FAQS from "../FAQS/FAQS";
import "./Help.css"

const Help = () => {

  const [menuHelp, setMenuHelp] = useState("FAQS")

  return (
  <div className="reporting-container reporting-container2">
    
    <h1 className="title-reporting">Ayuda</h1>
    <h1 className="title-reporting title-reporting2">¿Cómo podemos ayudarte?</h1>
    
    <div className="container-position">
      <div id="menu-settings" className="menu-settings menu-settings2">
        <div  onClick={()=>{setMenuHelp("FAQS")}}><h2 className="profile-link">FAQS</h2></div>
        <div  onClick={()=>{setMenuHelp("contact")}}><h2 className="links-config">Contáctanos</h2></div>
        <div  onClick={()=>{setMenuHelp("aboutUs")}}><h2 className="links-config">Sobre antiphi</h2></div>
      </div>

      {menuHelp==="FAQS"? <FAQS/>:null}

    </div>
</div>);
};

export default Help;
