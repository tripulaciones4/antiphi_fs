import React from "react";
import {Link} from 'react-router-dom';
import "./Reporting.css";
import Grafic from "../Grafic/Grafic";
import moreIcon  from '../../assets/moreIcon.JPG';


const Reporting = () => {
  return <div className="reporting-container">
    <h1 className="title-reporting">Reporte</h1>
    <div className="body-reporting">

      <div className="date-container">
        <input type="date" id="start" name="date-start" value="2018-07-22" min="2018-01-01" max="22-12-31"/>
        <input type="date" id="start" name="date-end" value="2018-07-22" min="2018-01-01" max="22-12-31"/>
      </div>

      <div className="links-container">
        <Link to="/reportingTrue"> 
          <div className="card-link"> 

            <div className="first-line-card">
              <p className="title-section">Seguras</p>
              <img className="moreIcon" src={moreIcon} alt="points" />
            </div>

            <div className="second-line-card">
              <p className="title-section2">Total</p>
              <p className="total-number">150</p>
            </div>

          </div>
        </Link>

        <Link to="/reportingFalse">
          <div className="card-link"> 

            <div className="first-line-card">
              <p className="title-section">Maliciosas</p>
              <img className="moreIcon" src={moreIcon} alt="points" />
            </div>

            <div className="second-line-card">
              <p className="title-section2">Total</p>
              <p className="total-number">200</p>
            </div>

          </div>
        </Link>

      </div>

      <div className="grafic-container"><Grafic /></div>
      <div className="list-searches-container">Añadir listado de búsquedas</div>



    







    </div>













  </div>;
};

export default Reporting;
