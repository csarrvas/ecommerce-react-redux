import React from 'react';

const DepartmentSelector = ({ departments, fetchCategories, departmentSelector, productsSearcher }) => {
  const selectDepartment = (e) => {
    productsSearcher.current.value = '';
    fetchCategories(parseInt(e.target.value));
  }

  return (
    <select ref={departmentSelector} id="departmentSelector" onChange={selectDepartment} defaultValue="">
      <option value="" disabled>Departments</option>
      <option value="0">All Departments</option>
      {departments.map(department =>
        <option
          key={department.department_id}
          value={department.department_id}
        > - {department.name}</option>
      )}
    </select>
  );
}
 
export default DepartmentSelector;