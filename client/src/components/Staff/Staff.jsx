import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../context/userContext';
import axios from "axios";
import UserList from "../UserList/UserList";


const Staff = () => {
  const {user} = useContext(userContext)

  const [staff, setStaff] = useState([])
  const [departments, setDepartments] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [filter, setFilter] = useState({ selected:"all"})

  useEffect(async() => {
    try{
      const data= await axios.get(`http://localhost:4000/api/users/company/${user.id_company}`,
            {
               headers: {'access-token': user.token}
              })
      let arrayDepartments=  data.data.map((item)=>item.department);
      setDepartments(arrayDepartments.filter((value, i) =>arrayDepartments.indexOf(value) === i));
      setStaff(data.data);
  }catch(err){
    console.log(err)
  }
}, [])




const handleChange= e => {setFilter({ selected: e.target.value || null })};

const filterList=(arr)=>{
  let filtered;
  filter.selected==="all"?
      filtered=arr
      :filtered= arr.filter(user=> user.department === filter.selected);
  return filtered;
}


  return (
  <div style={{"display": "flex", alignItems: "center", justifyContent: "center",flexDirection:"column"}}>
      <div>
          <h2>Empleados</h2>
          <Link to="/staff/add">
              <button>
                Añadir Empleados
              </button>
          </Link>
      </div>
      <br />
      <br />
      <div style={{"display": "flex"} } onChange={handleChange} value={ filter || ''}>
          <h3>Lista de Empleados</h3>
          <button onClick={()=>setShowFilter(!showFilter)}> Vista</button>
          {showFilter?
          <select  name="staff_filter">
              <option value="all" key="all" >Todos los departamentos</option>
              {departments.map((department,i)=><option value={department} key={i}>{department}</option>)}
          </select>
          :null
          }
      </div>

      <UserList users={filterList(staff)}/>
  </div>)
};

export default Staff;
