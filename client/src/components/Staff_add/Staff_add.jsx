import React, { useState } from "react";
import { Link } from "react-router-dom";
import CSVreader from "../CSVreader/CSVreader"
import TableCsv from "../TableCsv/TableCsv";
import Register from '../Register/Register';
import backIcon  from '../../assets/backIcon.jpg';
import "./Staff_add.css"

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
  <div className="container-staff-add-global">

    <div className="container-title-section">
      <Link to="/staff"><img className="backIcon" src={backIcon} alt="back-icon" /></Link>
      <h2 className="title-section-staff-add">Empleados - Añadir</h2>
    </div>

    <div className="container-addUsers-table">

      <div className="container-addUsers-section">
        <CSVreader data={data} setData={setData} info={data}/>
        <Register data={data} setData={setData}/>
      </div>

      <div className="container-table">
      <TableCsv columns={columns} data={data} close={()=>{setData([])}}/>
      </div>

    </div>

  </div>);
};

export default Staff_add;
