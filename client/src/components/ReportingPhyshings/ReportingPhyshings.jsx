import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReportingPhyshings.css';
import QueryList from '../QueryList/QueryList';
import { userContext } from '../../context/userContext';
import axios from 'axios';

const ReportingPhyshings = () => {
  const { user } = useContext(userContext);
  const [physhings, setPhyshings] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({ selected: 'all' });

  useEffect(async () => {
    const data = await axios.get(
      `http://localhost:4000/api/queries/company/${user.company.id_company}`,
      {
        headers: { 'access-token': user.token },
      }
    );
    let arrayDepartments = data.data.map(item => item.user.department);
    setDepartments(
      arrayDepartments.filter(
        (value, i) => arrayDepartments.indexOf(value) === i
      )
    );
    data.data.mensaje
      ? window.alert('Token inválido')
      : setPhyshings(
          data.data.filter(query => query.analysis_result === 'phishing')
        );
  }, []);

  const filterList = arr => {
    let filtered;
    filter.selected === 'all'
      ? (filtered = arr)
      : (filtered = arr.filter(
          query => query.user.department === filter.selected
        ));
    return filtered;
  };

  const handleChange = e => {
    setFilter({ selected: e.target.value || null });
  };

  return (
    <div className="staff-container-global">
      <div className="flex-rep-header">
        <Link className="arrow-back" to="/reporting">
          <p className="arrow-icon">&#8592;</p>
        </Link>
        <h1 className="title-reporting">Reporte-Maliciosas</h1>
      </div>

      <div className="body-reporting">
        <div
          className="list-searches-container"
          onChange={handleChange}
          value={filter || ''}
        >
          <div className="seguras-header">
            <h3>Lista de Empleados</h3>
            <button
              className="btn-filter-employers btn-filter-employers--2"
              onClick={() => setShowFilter(!showFilter)}
            >
              {' '}
              Vista
            </button>
          </div>

          {showFilter ? (
            <select
              className="select filter_select"
              name="staff_filter"
              size={departments.length + 1}
            >
              <option value="all" key="all" className="filter_select_all">
                Todos los resultados
              </option>
              {departments.map((department, i) => (
                <option value={department} key={i}>
                  {department}
                </option>
              ))}
            </select>
          ) : null}
          <QueryList type={'lastQueriesCompany'} queries={physhings} />
        </div>
      </div>
    </div>
  );
};

export default ReportingPhyshings;
