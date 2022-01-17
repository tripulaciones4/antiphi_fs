import React, { useRef } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
    
    const navigate=useNavigate()
    const form = useRef()

    const handleSubmit =async event => {
        console.log("activa");
        event.preventDefault();
        console.log(form);
        const user={
            email:form.current[0].value,
            password:form.current[1].value
        }
        console.log(user);
        const logIn=await axios.post('http://localhost:4000/api/users/login', user)
        console.log(logIn)
        logIn.status==200?navigate("/home"):console.log("Contraseña o usuario incorrectos")
    }


    return (
        <div className="container">
            <img src=""/>
            

            <form   ref={form}>
            <h2>Ingrese para mantener y mantenerlos seguros.</h2>
                <label htmlFor="email">Indroduzca su email</label>
                <br />
                <input  className="input_email" type="text" name="email" placeholder="miguel.depa@gmail.com" />
                <br />

                <label htmlFor="password">Indroduzca su contraseña</label>
                <br />
                <input className="input_password" type="password" name="password" placeholder="Password" />
                <br />

                <input  className="button_login" type="button" value="Log In" onClick={handleSubmit} /> <br/> <br/>
                <input type="checkbox" name="forget_password" placeholder="Password" /> Recuerdame ¿Olvidaste contraseña?

            </form>

            <h3>¿No tienes cuenta?</h3>
            <button className="button_register" type="button">Registrate</button>


        </div>
    );
};

export default Login
