import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import './css/displayDepartments.css';

const DisplayDepartments = ({ departments, fetchCategories }) => {
  const selectDepartment = (e) => {
    fetchCategories(parseInt(e.target.getAttribute('data-id')));
  }
  
  return (
    <Fragment>
      {departments.map(department =>
        <div
          className="department"
          key={`department-${department.department_id}`}
        >
          <p className="name">{department.name}</p>
          <p className="description">{department.description}</p>
          <button
            data-id={department.department_id}
            onClick={selectDepartment}
          >Visit this department</button>
        </div>
      )}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    departments: state.departments
  };
}
 
export default connect(mapStateToProps, { fetchCategories })(DisplayDepartments);