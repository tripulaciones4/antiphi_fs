import "./normalize.css";
import "./App.css";
import { userContext } from './context/userContext';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from 'react-router-dom'; // utilizar rutas
import { useState } from "react";


function App() {
    const [user, setUser] = useState({})

    return (
        <div> 
      <userContext.Provider value={{user,setUser}}>
            <BrowserRouter>
                <Header /> 
                <Main />            
            </BrowserRouter> 
      </userContext.Provider>
        </div>
    );
}

export default App;
