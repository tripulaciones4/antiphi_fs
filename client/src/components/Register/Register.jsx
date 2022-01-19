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
            <h2>Registro</h2>

            <form ref={register_form}>

                <label htmlFor="name">Nombre</label>
                <br />
                <input type="text" name="name" placeholder="Introduce nombre para añadir" />
                <br />
                <label htmlFor="last_name">Apellido</label>
                <br />
                <input type="text" name="last_name" placeholder="Introduce apellido para añadir" />
                <br />

                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" placeholder="Introduce email para añadir" />
                <br />
                <label htmlFor="department">Departamento</label>
                <br />
                <input type="text" name="department" placeholder="Introduce departamento para añadir" />
                <br />

                {/* <label htmlFor="password">Indroduzca su contraseña</label>
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />

                <label htmlFor="password_repeat">Repita su contraseña</label>
                <br />
                <input type="password" name="password_repeat" placeholder="Password" />
                <br /> */

                /* <label htmlFor="account">Tipo de cuenta:</label><br />
                <select name="cars" id="cars"><br />
                    <option value="company">Empresa</option><br />
                    <option value="user">Usario</option><br />
                    
                </select><br /><br /> */}

                <button type="button" onClick={handleSubmit}>Añadir</button>
            </form>
        </div>
    );
};

export default Register;
