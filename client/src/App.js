import "./normalize.css";
import "./App.css";
import { userContext } from './context/userContext';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from 'react-router-dom'; // utilizar rutas
import {useState } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-5DH48LH'
}
TagManager.initialize(tagManagerArgs)

function App() {
    
    const [user, setUser] = useState({})
    
    
    
        

    return (
        <div> 
      <userContext.Provider value={{user,setUser}}>
            <BrowserRouter>
                {user.token?<Header/>:null} 
                <Main />            
            </BrowserRouter> 
      </userContext.Provider>
        </div>
    );
}

export default App;
