import React from "react";
import "./Register.css";

const Register = () => {
    return (
        <div>
            <h2>Registro</h2>

            <form>
                <label htmlFor="name">Nombre</label>
                <br />
                <input type="text" name="name" placeholder="nombre" />
                <br />

                <label htmlFor="email">Indroduzca su email</label>
                <br />
                <input type="text" name="email" placeholder="Email" />
                <br />

                <label htmlFor="password">Indroduzca su contraseña</label>
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />

                <label htmlFor="password">Repita su contraseña</label>
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />

                <label for="account">Tipo de cuenta:</label><br />
                <select name="cars" id="cars"><br />
                    <option value="company">Empresa</option><br />
                    <option value="user">Usario</option><br />
                    
                </select><br /><br />

                <button type="button">Enviar</button>
            </form>
        </div>
    );
};

export default Register;
