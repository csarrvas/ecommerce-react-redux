import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDepartments, fetchAllProductsName } from '../actions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './css/app.css';

const App = ({ fetchDepartments, fetchAllProductsName }) => {
  useEffect(() => {
    fetchDepartments();
    fetchAllProductsName();
  }, [fetchDepartments, fetchAllProductsName]);

  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default connect(null, { fetchDepartments, fetchAllProductsName })(App);