import React, { useRef } from "react";
import "./Register.css";

const Register = ({data,setData}) => {
    const register_form = useRef()

    const handleSubmit =event => {
        event.preventDefault();
        const register_user= {
            name:register_form.current.name.value,
            last_name:register_form.current.last_name.value,
            email:register_form.current.email.value,
            department: register_form.current.department.value
        }
        const newData= [register_user].concat(data)
        setData(newData)
        register_form.current.name.value=""
        register_form.current.last_name.value=""
        register_form.current.email.value=""
        register_form.current.department.value=""

    }


    return (
        <div>

            <form className="register-form" ref={register_form}>

                <input className="input-form-user input1" type="text" name="name" placeholder="Nombre" />            
                
                <input className="input-form-user" type="text" name="last_name" placeholder= "Apellido" />
                
                <input className="input-form-user" type="email" name="email" placeholder="Empleado1@empresa.com" />
                
                <input className="input-form-user" type="text" name="department" placeholder="Contabilidad" />
                

                <button className="btn-form-employers" type="button" onClick={handleSubmit}>Añadir</button>
            </form>
        </div>
    );
};

export default Register;
