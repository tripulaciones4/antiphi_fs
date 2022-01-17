import React from "react";
import "./Login.css";


const Login = () => {
    return (
        <div className="container">
            <img src=""/>
            

            <form>
            <h2>Ingrese para mantener y mantenerlos seguros.</h2>
                <label htmlFor="email">Indroduzca su email</label>
                <br />
                <input  className="input_email" type="text" name="email" placeholder="miguel.depa@gmail.com" />
                <br />

                <label htmlFor="password">Indroduzca su contraseña</label>
                <br />
                <input className="input_password" type="password" name="password" placeholder="Password" />
                <br />
               
                <button className="button_login" type="button">Log   In</button> <br/> <br/>
                <input type="checkbox" name="password" placeholder="Password" /> Recuerdame ¿Olvidaste contraseña?

            </form>

            <h3>¿No tienes cuenta?</h3>
            <button className="button_register" type="button">Registrate</button>

        </div>
    );
};

export default Login
