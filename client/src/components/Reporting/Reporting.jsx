import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Reporting.css';
import Grafic from '../Grafic/Grafic';
import moreIcon from '../../assets/moreIcon.JPG';
import QueryList from '../QueryList/QueryList';
import { userContext } from '../../context/userContext';
import axios from 'axios';

const Reporting = () => {

  const { user } = useContext(userContext);

  const [queries, setQueries] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({ selected: 'all' });

  useEffect(async () => {
    const data = await axios.get(
      `/api/queries/company/${user.company.id_company}`,
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
    data.data.mensaje ? window.alert('Token inválido') : setQueries(data.data);
  }, []);

  const legitimates = queries.filter(
    query => query.analysis_result === 'legitimate'
  );
  const physhings = queries.filter(
    query => query.analysis_result === 'phishing'
  );

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
    <div className="reporting-container">
      <h1 className="title-reporting">Reporte</h1>
      <div className="body-reporting">
        <div className="date-container">
          <input
            type="date"
            id="start"
            name="date-start"
            defaultValue="2021-12-22"
            min="2018-01-01"
            max="2022-01-22"
          />
          <input
            type="date"
            id="start"
            name="date-end"
            defaultValue="2022-01-22"
            min="2018-01-01"
            max="2022-01-22"
          />
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

        <div className="grafic-container">
          <Grafic />
        </div>


        <div
          className="list-searches-container"
          onChange={handleChange}
          value={filter || ''}
        >
          <div className="container-staff-radious">
            <div className="header-table-staff">
              <h3>Últimas búsquedas de los empleados</h3>
              <button
                className="btn-filter-employers"
                onClick={() => setShowFilter(!showFilter)}
              >
                {' '}
                Vista
              </button>
            </div>

            {showFilter ? (
              <select
                className="select filter_select selectReports"
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
            <div className="container-global-userList">
            <QueryList
              type={'lastQueriesCompany'}
              queries={filterList(queries)}
            />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
