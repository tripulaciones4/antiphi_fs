import React, { useContext, useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import "./ReportingPhyshings.css"
import QueryList from "../QueryList/QueryList";
import { userContext } from '../../context/userContext';
import axios from "axios";

const ReportingPhyshings = () => {
  
    const {user} = useContext(userContext)
    const [physhings, setPhyshings] = useState([])
    const [departments, setDepartments] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    
  useEffect(async() => {
    const data= await axios.get(`http://localhost:4000/api/queries/company/${user.company.id_company}`,{
        headers: {'access-token': user.token}
        })
        let arrayDepartments=  data.data.map((item)=>item.user.department);
        setDepartments(arrayDepartments.filter((value, i) =>arrayDepartments.indexOf(value) === i));
    data.data.mensaje?window.alert("Token inválido"):setPhyshings(data.data.filter(query=>query.analysis_result==="phishing"))
}, [])



  
  
  
  return (<div>
      <Link to="/reporting">
              <button>
              {"<--"}
              </button>
    </Link>
      <h1 className="title-reporting">Reporte-Maliciosas</h1>
    
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
        <QueryList type={"lastQueriesCompany"} queries={physhings}/>
      </div>
      </div>
  </div>);
};

export default ReportingPhyshings;