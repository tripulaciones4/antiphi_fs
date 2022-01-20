import React, { useState } from "react";
import { Link } from "react-router-dom";
import CSVreader from "../CSVreader/CSVreader"
import TableCsv from "../TableCsv/TableCsv";
import Register from '../Register/Register'

const Staff_add = () => {
  const [data, setData] = useState([]);

    

  const columns = [
    {
        name: 'Nombre',
        selector: row => row.name,
    },
    {
        name: 'Apellido',
        selector: row => row.last_name,
    },
    {
      name: 'Email',
      selector: row => row.email,
  },
  {
    name: 'Departamento',
    selector: row => row.department,
},

];

  return (
  <div style={{"display": "flex", alignItems: "center", justifyContent: "center",flexDirection:"column"}}>
     <Link to="/staff">
              <button>
              {"<--"}
              </button>
    </Link>
    <h2>Empleados</h2>
    <CSVreader data={data} setData={setData} info={data}/>
    <Register data={data} setData={setData}/>
    <TableCsv columns={columns} data={data} close={()=>{setData([])}}/>
    
  </div>);
};

export default Staff_add;
