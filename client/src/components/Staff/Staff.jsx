import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import axios from 'axios';
import UserList from '../UserList/UserList';
import './Staff.css';
import filterIcon from '../../assets/filterIcon.jpg';

const Staff = () => {
  const { user } = useContext(userContext);
  
  const [staff, setStaff] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({ selected: 'all' });
  
  const location=useLocation()
  
  useEffect(async () => {
    try {
      const data = await axios.get(
        `http://localhost:4000/api/users/company/${user.company.id_company}`,
        {
          headers: { 'access-token': user.token },
        }
      );
      const withoutUser=data.data.filter(employee => employee.email != user.email)
      let arrayDepartments = withoutUser.map(item => item.department);
      setDepartments(
        arrayDepartments.filter(
          (value, i) => arrayDepartments.indexOf(value) === i
        )
      );
      console.log(data.data);
      setStaff(data.data);
    } catch (err) {
      console.log(err);
    }
  }, [location==="/staf"]);

  const handleChange = e => {
    setFilter({ selected: e.target.value || null });
  };

  const filterList = arr => {
    let filtered;
    filter.selected === 'all'
      ? (filtered = arr)
      : (filtered = arr.filter(user => user.department === filter.selected));
    return filtered;
  };


  return (
    <div className="staff-container-global">
      <div className="div-title-staff">
        <h2 className="employers-title-staff">Empleados</h2>
        <Link to="/staff/add">
          <button className="btn-staff-add">Añadir Empleados</button>
        </Link>
      </div>

      <div className="container-staff-radious">
        <div
          className="header-table-staff"
          onChange={handleChange}
          value={filter || ''}
        >
          <h3>Lista de Empleados</h3>
          <button
            className="btn-filter-employers"
            onClick={() => setShowFilter(!showFilter)}
          >
            <img className="img-filter" alt="icon" src={filterIcon}></img>
            Vista
          </button>

          {showFilter ? (
            <select
              className="select filter_select"
              name="staff_filter"
              size={departments.length + 1}
            >
              <option value="all" key="all" className="filter_select_all">
                Todos los departamentos
              </option>
              {departments.map((department, i) => (
                <option value={department} key={i}>
                  {department}
                </option>
              ))}
            </select>
          ) : null}
        </div>

        <div className="container-global-userList">
          <UserList users={filterList(staff)} />
        </div>
        
      </div>
    </div>
  );
};

export default Staff;
