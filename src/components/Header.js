import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories, searchProduct, reset } from '../actions/seeTheStoreActions';
import DepartmentSelector from './inputs/DepartmentSelector';
import ProductsSearcher from './inputs/ProductsSearcher';
import './css/header.css';

const Header = ({ departments, allProductsName, fetchCategories, searchProduct, reset }) => {
  const departmentSelector = React.createRef();
  const productsSearcher = React.createRef();

  const login = () => {
    // create an action to login
  }

  const reload = () => {
    departmentSelector.current.value = '';
    productsSearcher.current.value = '';
    reset();
  }

  return (
    <header>
      <figure onClick={reload}>
        <img alt="logo" src="images/logo.png"/>
      </figure>
      <DepartmentSelector
        departments={departments}
        fetchCategories={fetchCategories}
        departmentSelector={departmentSelector}
        productsSearcher={productsSearcher}
      />
      <ProductsSearcher
        allProductsName={allProductsName}
        searchProduct={searchProduct}
        productsSearcher={productsSearcher}
        departmentSelector={departmentSelector}
      />
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