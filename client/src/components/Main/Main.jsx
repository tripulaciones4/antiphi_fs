import React from "react";
import Login from "../Login/Login";

import "./Main.css"
import {Route, Routes} from 'react-router-dom'; //Para las rutas


const Main = () => {
  return <div>
<Routes>
      <Route path="/" element={< Login />}/>
       
    </Routes>

  
  </div>;
};

export default Main;
