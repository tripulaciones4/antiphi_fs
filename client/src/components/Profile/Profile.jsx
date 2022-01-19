import React, { useContext } from "react";
import { userContext } from "../../context/userContext";

const Profile = () => {
  const {user} = useContext(userContext);
  console.log(user);

  const {email,company,name,last_name,department,createdAt} =user
  const incorporation=new Date(createdAt)
  var options = {  year: 'numeric', month: 'long', day: 'numeric' };
  console.log(incorporation);
  return (
  <div>
        <div>
            <h3>Nombre</h3>
            <p>{name} {last_name}</p>
            <button>Cambiar</button>
        </div>

        <div>
            <h3>Corre electrónico</h3>
            <p>{email}</p>
            <button>Cambiar</button>
        </div>

        <div>
            <h3>Empresa</h3>
            <p>{company.name}</p>
            <button>Cambiar</button>
        </div>
        <div>
          <h3>Departamento</h3>
          <p>{department}</p>
          <button>Cambiar</button>
          </div>
        <div>
            <h3>Incorporación</h3>
            <p>{incorporation.toLocaleDateString("es-ES", options)}</p>
        </div>
  </div>);
};

export default Profile;
