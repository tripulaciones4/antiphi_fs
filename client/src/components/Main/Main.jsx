import React from "react";
import Login from "../Login/Login";
import Form from "../Form/Form";
import Staff from "../Staff/Staff";
import StaffAdd from "../Staff_add/Staff_add";
import Reporting from "../Reporting/Reporting";
import "./Main.css"
import {Route, Routes} from 'react-router-dom'; //Para las rutas
import ReportingLegitimates from "../ReportingLegitimates/ReportingLegitimates";
import ReportingPhyshings from "../ReportingPhyshings/ReportingPhyshings";


const Main = () => {

  return (<main>  
  <Routes>    
    <Route path="/" element={<Login />} />    
    <Route path="/home" element={<Form />} />
    <Route path="/staff" element={<Staff/>} />
    <Route path="/staff/add" element={<StaffAdd/>} />    
    <Route path="/reporting" element={<Reporting />} />
    <Route path="/reporting/legitimates" element={<ReportingLegitimates/>} /> 
    <Route path="/reporting/physhings" element={<ReportingPhyshings />} />   

  </Routes>

  </main>);

};

export default Main;
