import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories, searchProduct, reset } from '../actions';
import './css/header.css';

const Header = ({ departments, allProductsName, fetchCategories, searchProduct, reset }) => {
  const selectDepartment = (e) => {
    document.getElementById('search').value = '';
    fetchCategories(parseInt(e.target.value));
  }
  
  const searchFor = (e) => {
    e.preventDefault();
    document.getElementById('departmentSelector').value = '';
    searchProduct(document.getElementById('search').value.toLowerCase(), allProductsName);
  }

  const login = () => {
    // create an action to login
  }

  const reload = () => {
    document.getElementById('search').value = '';
    document.getElementById('departmentSelector').value = '';
    reset();
  }

  return (
    <header>
      <figure onClick={reload}>
        <img alt="logo" src="images/logo.png"/>
      </figure>
      <select id="departmentSelector" onChange={selectDepartment} defaultValue="">
        <option value="" disabled>Departments</option>
        <option value="0">All Departments</option>
        {departments.map(department =>
          <option
            key={department.department_id}
            value={department.department_id}
          > - {department.name}</option>
        )}
      </select>
      <form onSubmit={searchFor}>
        <input id="search" type="text" placeholder="Search"/><i onClick={searchFor} className="fas fa-search"></i>
      </form>
      <div id="user-actions">
        <div id="login" onClick={login}>
          <p>Log in <i className="far fa-user"></i></p>
        </div>
        <div id="cart">
          <p>Cart <i className="fas fa-cart-arrow-down"></i></p>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    departments: state.departments,
    allProductsName: state.allProductsName
  };
}

export default connect(mapStateToProps, { fetchCategories, searchProduct, reset })(Header);