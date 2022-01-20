import React, { useContext, useState } from "react";
import DataTable from "react-data-table-component"
import "./TableCsv.css"
import axios from "axios";
import { userContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import iconPopUpAdd from "../../assets/img/AddEmployee.jpg"
import "./TableCsv.css"


const TableCsv = ({columns,data,close}) => {

  const [popUp, setPopUp] = useState(false);

  const {user} = useContext(userContext)
  const [input, setInput] = useState("")
  const handleChange = event => setInput(event.target.value)
  const navigate=useNavigate()

  const createUsers=async (password)=>{
    try{if(input){
     data.map(async(element)=>{
      element.id_company=user.company.id_company
      element.password=password
      element.role="employee"

      const res= await axios.post('/api/users/create', element)
    })

    await setInput("")
    await close()
    setPopUp(true)
    

  }else{
    return alert("Introduzca una contraseña genérica para sus usuarios")
  }}catch(err){
    console.log(err)
  }}

  return (<div className="windowCsv">
    
      <h4 className="title-table">Empleados añadidos</h4>
      {data.length>0?<button className="btn-delete-table" onClick={()=>close()}>Borrar</button>:null}
    
    <div className="tableCsv">
    <DataTable
    pagination={data.length>10?true:false}
    highlightOnHover
    columns={columns}
    data={data}
    noDataComponent="No se han añadido datos"
    />
    </div>
<input className="input-table-password" type="password" onChange={handleChange} placeholder="Contraseña genérica"/>
<button className="input-finish" onClick={()=>createUsers(input)} >Finalizar</button>
{popUp? <PopUp close={()=>{setPopUp(false); navigate("/staff")}} img={iconPopUpAdd} title={"Añadido correctamente"} message={"Añadiste un nuevo empleado a la base de datos, ahora podra asegurarse antes de introducir cualquier dato en URL's sospechosas"} />
            :null}
</div>);
};

export default TableCsv;
