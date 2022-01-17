import React, { useState } from "react";
import DataTable from "react-data-table-component"
import "./TableCsv.css"
import axios from "axios";

const TableCsv = ({columns,data,close}) => {
  const [input, setInput] = useState("")
  const handleChange = event => setInput(event.target.value)

  const createUsers=async (password)=>{
    if(input){
      data.map(async(element, i)=>{
      element.password=password
      element.role="employee"
      await axios.post('http://localhost:4000/api/users/create', element)
    })
    await setInput("")
    await close()
  }else{
    return alert("Introduzca una contraseña genérica para sus usuarios")
  }}

  return <div className="windowCsv">
    <button onClick={()=>close()}>X</button>
    <div className="tableCsv">
    <DataTable
    pagination={data.length>10?true:false}
    highlightOnHover
    columns={columns}
    data={data}
    />
    </div>
<input type="text" onChange={handleChange}/>
<button onClick={()=>createUsers(input)}>Create users</button>
</div>;
};

export default TableCsv;
