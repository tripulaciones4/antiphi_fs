import React from "react";
import "./Form.css";
import Header from "../Header/Header";
import Searches from "../Searches/Searches";


const Form = () => {
    return (
        <div>
            <div><Header /></div>
            <form action="" method="POST">
                <label htmlFor="search">Don't take the bait!</label>                    
                <input type="text" name="search" placeholder="Buscar URL" />                    
                <button type="submit" value="Submit">Buscar</button>
            </form>
            <div><Searches /></div>
        </div>      
    );
};

export default Form;
