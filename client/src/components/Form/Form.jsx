import React from "react";
import "./Form.css";
import axios from "axios"



const Form = () => {
    const  handleSubmit = () => {
        axios.post('http://localhost:4000/api/queries/create', {
            
                "url": "http://Banana.ios.apple.com",
                "analysis_result":"physhing",
                "id_user":4
                
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        
        });
    }
    return (
        <div>
            <h3>Form</h3>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="search">Indroduzca su busqueda</label>
                <br />
                <input type="text" name="search" placeholder="busqueda" />
                <br />
                <button type="submit" value="Submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Form;
