import React from "react";
import "./Form.css";

// import axios from "axios"


import Header from "../Header/Header";
import Searches from "../Searches/Searches";
import fondo  from '../../assets/fondo.jpeg';



const Form = () => {
    // const  handleSubmit = () => {
    //     axios.post('http://localhost:4000/api/queries/create', {
            
    //             "url": "http://Banana.ios.apple.com",
    //             "analysis_result":"physhing",
    //             "id_user":4
                
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
        
    //     });
    // }
    return (
        <div>   
            <div><Header /></div>

            <form className="form-search" action="" method="POST" style={
                { backgroundImage: `url(${fondo})` }
                }>

                <label className="label-search" htmlFor="search">Don't take the bait!</label>                    
                <div className="search-container">
                    <input className="input-search" type="text" name="search" placeholder="Buscar URL" />                    
                    <button className="btn-search" type="submit" value="Submit">Buscar</button>
                </div>

            </form>

            <div><Searches /></div>
        </div>     
    );
};

export default Form;
