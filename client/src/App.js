import "./normalize.css";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
          <Main/>
        </BrowserRouter>
            
            
        </div>
    );
}

export default App;
