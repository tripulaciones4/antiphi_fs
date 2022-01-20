import React, { useContext } from "react";
import { userContext } from "../../context/userContext";
import "./Profile.css"

const Profile = () => {
  
  const {user} = useContext(userContext);
  
  const {email,company,name,last_name,department,createdAt} =user
  const incorporation=new Date(createdAt)
  var options = {  year: 'numeric', month: 'long', day: 'numeric' };
  return (
  <div className="container-card-profile">
        <div className="row">
          <div className="column1">
            <h3>Nombre</h3>
            <p>{name} {last_name}</p>
          </div>            
          <button className="btn-rows">Cambiar</button>
        </div>

        <div className="row">
            <div className="column1">
              <h3>Correo electrónico</h3>
              <p>{email}</p>
            </div>            
            <button className="btn-rows">Cambiar</button>
        </div>

        <div className="row">
            <div className="column1">
              <h3>Empresa</h3>
              <p>{company.name}</p>
            </div>            
            <button className="btn-rows">Cambiar</button>
        </div>

        <div className="row">
            <div className="column1">
              <h3>Departamento</h3>
              <p>{department}</p>
            </div>            
            <button className="btn-rows">Cambiar</button>
        </div>
        
        <div className="row">
            <div className="column1">
              <h3>Incorporación</h3>
              <p>{incorporation.toLocaleDateString("es-ES", options)}</p>
            </div>            
        </div>

  </div>);
};

export default Profile;
