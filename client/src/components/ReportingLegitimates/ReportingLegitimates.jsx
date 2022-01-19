import React, { useContext, useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import "./ReportingLegitimates.css"
import QueryList from "../QueryList/QueryList";
import { userContext } from '../../context/userContext';
import axios from "axios";

const ReportingLegitimates = () => {
  
    const {user} = useContext(userContext)
    const [legitimates, setLegitimates] = useState([])
    const [departments, setDepartments] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    
  useEffect(async() => {
    const data= await axios.get(`http://localhost:4000/api/queries/company/${user.id_company}`,{
        headers: {'access-token': user.token}
        })
        let arrayDepartments=  data.data.map((item)=>item.user.department);
        setDepartments(arrayDepartments.filter((value, i) =>arrayDepartments.indexOf(value) === i));
    data.data.mensaje?window.alert("Token inválido"):setLegitimates(data.data.filter(query=>query.analysis_result==="legitimate"))
}, [])



  
  
  
  return (<div>
      <Link to="/reporting">
              <button>
              {"<--"}
              </button>
    </Link>
      <h1 className="title-reporting">Reporte-Seguras</h1>
    
      <div className="body-reporting">
      <div className="list-searches-container">
      <h3>Lista de Empleados</h3>
          <button onClick={()=>setShowFilter(!showFilter)}> Vista</button>
          {showFilter?
          <select  name="staff_filter">
              <option value="all" key="all" >Busquedas con resultado: Seguras</option>
              {departments.map((department,i)=><option value={department} key={i}>{department}</option>)}
          </select>
          :null
          }
        <QueryList type={"lastQueriesCompany"} queries={legitimates}/>
      </div>
      </div>
  </div>);
};

export default ReportingLegitimates;
