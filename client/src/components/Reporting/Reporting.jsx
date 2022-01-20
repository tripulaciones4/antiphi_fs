import React, { useContext, useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import "./Reporting.css";
import Grafic from "../Grafic/Grafic";
import moreIcon  from '../../assets/moreIcon.JPG';
import QueryList from "../QueryList/QueryList";
import { userContext } from '../../context/userContext';
import axios from "axios";


const Reporting = () => {

  const {user} = useContext(userContext)
    
    const [queries, setQueries] = useState([])
    const [departments, setDepartments] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    
  useEffect(async() => {
    const data= await axios.get(`http://localhost:4000/api/queries/company/${user.company.id_company}`,{
        headers: {'access-token': user.token}
        })
        let arrayDepartments=  data.data.map((item)=>item.user.department);
        setDepartments(arrayDepartments.filter((value, i) =>arrayDepartments.indexOf(value) === i));
    data.data.mensaje?window.alert("Token inválido"):setQueries(data.data)
}, [])

const legitimates=queries.filter(query=>query.analysis_result==="legitimate")
const physhings=queries.filter(query=>query.analysis_result==="phishing")
  


  return <div className="reporting-container">
    <h1 className="title-reporting">Reporte</h1>
    <div className="body-reporting">

      <div className="date-container">
        <input type="date" id="start" name="date-start" defaultValue="2018-07-22" min="2018-01-01" max="22-12-31"/>
        <input type="date" id="start" name="date-end" defaultValue="2018-07-22" min="2018-01-01" max="22-12-31"/>
      </div>

      <div className="links-container">
        <Link to="/reporting/legitimates"> 
          <div className="card-link"> 

            <div className="first-line-card">
              <p className="title-section">Seguras</p>
              <img className="moreIcon" src={moreIcon} alt="points" />
            </div>

            <div className="second-line-card">
              <p className="title-section2">Total</p>
              <p className="total-number">{legitimates.length}</p>
            </div>

          </div>
        </Link>

        <Link to="/reporting/physhings">
          <div className="card-link"> 

            <div className="first-line-card">
              <p className="title-section">Maliciosas</p>
              <img className="moreIcon" src={moreIcon} alt="points" />
            </div>

            <div className="second-line-card">
              <p className="title-section2">Total</p>
              <p className="total-number">{physhings.length}</p>
            </div>

          </div>
        </Link>

      </div>

      <div className="grafic-container"><Grafic /></div>
      <div className="list-searches-container">
      <h3>Últimas busquedas de los empleados</h3>
          <button onClick={()=>setShowFilter(!showFilter)}> Vista</button>
          {showFilter?
          <select  name="staff_filter">
              <option value="all" key="all" >Todos los departamentos</option>
              {departments.map((department,i)=><option value={department} key={i}>{department}</option>)}
          </select>
          :null
          }
        <QueryList type={"lastQueriesCompany"} queries={queries}/>
      </div>



    







    </div>













  </div>;
};

export default Reporting;
