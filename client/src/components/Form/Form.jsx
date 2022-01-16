import React from "react";
import "./Form.css";

const Form = () => {
    return (
        <div>
            <h3>Form</h3>
            <form action="" method="POST">
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
