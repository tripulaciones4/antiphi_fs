import React from "react";
import Form from "../Form/Form";
import Login from "../Login/Login";
import {Route, Routes} from 'react-router-dom'; //Para las rutas
import "./Main.css"

const Main = () => {
  return (<main>

  <Routes>    
    <Route path="/" element={<Login />} />    
    <Route path="/home" element={<Form />} />    
  </Routes>

  </main>);
};

export default Main;
