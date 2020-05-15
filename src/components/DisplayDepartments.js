import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import './css/cardsStyle.css';

const DisplayDepartments = ({ departments, loading }) => {

  return (
    <Fragment>
      {loading ? <Spinner/> : departments.map(department =>
        <div
          className="department"
          key={`department-${department.department_id}`}
        >
          <p className="name">{department.name}</p>
          <p className="description">{department.description}</p>
          <Link to={`/categories/inDepartment/${department.department_id}`}>
            <button>Visit this department</button>
          </Link>
        </div>
      )}
    </Fragment>
  );
}

export default DisplayDepartments;