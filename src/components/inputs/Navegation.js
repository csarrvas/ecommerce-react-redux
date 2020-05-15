import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentSelector = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/departments">Departments</Link></li>
      </ul>
    </nav>
  );
}
 
export default DepartmentSelector;