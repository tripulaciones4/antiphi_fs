import React from "react";
import "./PopUp.css"
import xClose from "../../assets/img/Xcierre.jpg"



const PopUp = ({close,url,img,title,message}) => {


  return (<div className="pop-up_container">
    <img src={xClose} alt="Icono cerrar Pop-Up" onClick={close} className="pop-up_close"/>
    <img src={img} alt="Icono Pop-Up" className="pop-up_img"/>
    <h1 className="pop-up_title">{title}</h1>
    <p className="pop-up_message">{message}</p>
    {url?<a target="_blank" href={url}>
            <button onClick={close} className="pop-up_button">
              Visitar URL
            </button>
          </a>
        :<button onclick={close} className="pop-up_button">Finalizar</button>}

  </div>);
};

export default PopUp;
