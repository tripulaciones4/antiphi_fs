import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div>
            <h2>Login</h2>

            <form>
                <label htmlFor="email">Indroduzca su email</label>
                <br />
                <input type="text" name="email" placeholder="Email" />
                <br />

                <label htmlFor="password">Indroduzca su contraseña</label>
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                
                <button type="button">Enviar</button>
            </form>
        </div>
    );
};

export default Login;
