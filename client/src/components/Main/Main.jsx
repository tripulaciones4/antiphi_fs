import React, { useEffect, useContext, useState } from "react";
import Login from "../Login/Login";
import Form from "../Form/Form";
import Staff from "../Staff/Staff";
import StaffAdd from "../Staff_add/Staff_add";
import Reporting from "../Reporting/Reporting";
import "./Main.css"
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'; //Para las rutas
import ReportingLegitimates from "../ReportingLegitimates/ReportingLegitimates";
import ReportingPhyshings from "../ReportingPhyshings/ReportingPhyshings";
import Settings from "../Settings/Settings";
import Help from "../Help/Help";
import { userContext } from '../../context/userContext';



const Main = () => {

  const {user} = useContext(userContext)
  const navigate=useNavigate()
  const location = useLocation().pathname;
  const [popUp, setPopUp] = useState(false);
     
  useEffect(() => {
    return location==="/"? null:user.email?null:setPopUp(true)
  }, [location]);
  useEffect(() => {
    return  popUp?navigate("/"):null
  }, [popUp]);
  


  return (<main>  
  <Routes>    
    <Route path="/" element={<Login close={()=>setPopUp(false)} popUp={popUp} setPopUp={(e)=>setPopUp(e)}/>} />    
    <Route path="/home" element={<Form />} />
    <Route path="/staff" element={<Staff/>} />
    <Route path="/staff/add" element={<StaffAdd/>} />    
    <Route path="/reporting" element={<Reporting />} />
    <Route path="/reporting/legitimates" element={<ReportingLegitimates/>} /> 
    <Route path="/reporting/physhings" element={<ReportingPhyshings />} />   
    <Route path="/settings" element={<Settings />} /> 
    <Route path="/help" element={<Help />}/> 

  </Routes>

  </main>);

};

export default Main;
