import React from "react";
import "./Form.css";
import Header from "../Header/Header";
import Searches from "../Searches/Searches";
import fondo  from '../../assets/fondo.jpeg';


const Form = () => {
    return (
        <div>
            <div><Header /></div>

            <form className="form-search" action="" method="POST" style={{ backgroundImage: `url(${fondo})` }}>
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
