import React, { useContext, useState } from "react";
import DataTable from "react-data-table-component"
import "./TableCsv.css"
import axios from "axios";
import { userContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";


const TableCsv = ({columns,data,close}) => {

  const {user} = useContext(userContext)
  const [input, setInput] = useState("")
  const handleChange = event => setInput(event.target.value)
  const navigate=useNavigate()

  const createUsers=async (password)=>{
    if(input){
      data.map(async(element)=>{
      element.id_company=user.id_company
      element.password=password
      element.role="employee"
      await axios.post('http://localhost:4000/api/users/create', element)
    })
    await setInput("")
    await close()
    console.log("Usuarios dados de alta con exito")
    navigate("/staff")
    

  }else{
    return alert("Introduzca una contraseña genérica para sus usuarios")
  }}

  return <div className="windowCsv">
    
      <h4>Empleados añadidos</h4>
      <button onClick={()=>close()}>Borrar</button>
    
    <div className="tableCsv">
    <DataTable
    pagination={data.length>10?true:false}
    highlightOnHover
    columns={columns}
    data={data}
    />
    </div>
<input type="password" onChange={handleChange} placeholder="Contraseña genérica"/>
<button onClick={()=>createUsers(input)} >Finalizar</button>
</div>;
};

export default TableCsv;
