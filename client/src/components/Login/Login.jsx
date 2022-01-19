import React, { useContext, useRef } from "react";
import "./Login.css";

import logo from "../../assets/img/LogoAntiphi.jpg"
import waves from "../../assets/img/OlasDash.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from '../../context/userContext';



const Login = () => {

    const {user, setUser} = useContext(userContext)
    
    const navigate=useNavigate()
    const login_form = useRef()

    const handleSubmit =async event => {
        event.preventDefault();
        const log_user={
            email:login_form.current[0].value,
            password:login_form.current[1].value
        }
        const logIn=await axios.post('/api/users/login', log_user)
                
        const response=logIn.data
        delete response['mensaje'];

        const newUser = await Object.assign(response,user)
        setUser(newUser)
        logIn.data==="Wrong Pass!"?console.log("Contraseña o usuario incorrectos"):navigate("/home")

    }


    return (
        <div className="center">
        <div className="container">
            <div>
                <img className="logo" src={logo} alt="Logo Antiphi"/>
            </div>
            

            <div >
                <form className="form" ref={login_form}>
                    <h2 className="title">Ingrese para mantener y mantenerlos seguros.</h2>
                                       
                    <input  className="input_email" type="text" name="email" placeholder="Email" />                    
                    <input className="input_password" type="password" name="password" placeholder="Password" />
                   
                </form>
            </div>

            <div className="container_checkbox">
                <div className="line_checkbox">
                <input className="input_checkbox" type="checkbox" name="forget_password" placeholder="Password" />
                <label className="label_checkbox">Recuerdame</label>
                </div>
                <p className="forget_password">¿Olvidaste contraseña?</p>
            </div>

            <div className="form">
                <button className="button_login" type="button" onClick={handleSubmit}>Log   In</button> <br/> <br/>
            </div>


            <div className="form">
                <h3>¿No tienes cuenta?</h3>
            </div>

            <div className="form">
                <button className="button_register" type="button">Registrate</button>
            </div>
            
        </div>
            <div>
                <img className="waves" src={waves} alt="Olas decorativas"/>
            </div>
        </div>
    );
};

export default Login
