import React from "react";
import Login from "../Login/Login";
import Form from "../Form/Form";
import "./Main.css"
import {Route, Routes} from 'react-router-dom'; //Para las rutas


const Main = () => {

  return (<main>  
  <Routes>    
    <Route path="/" element={<Login />} />    
    <Route path="/home" element={<Form />} />    
  </Routes>

  </main>);

};

export default Main;
