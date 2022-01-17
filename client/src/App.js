import "./normalize.css";
import "./App.css";


import Header from "./components/Header/Header";


import Main from "./components/Main/Main";
import { BrowserRouter } from 'react-router-dom'; // utilizar rutas


function App() {
    return (
        <div className="App">

            <BrowserRouter> 
                <Main />            
            </BrowserRouter>            

        </div>
    );
}

export default App;
