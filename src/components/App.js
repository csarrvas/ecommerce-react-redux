import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchDepartments, fetchAllProductsName } from '../actions/seeTheStoreActions';
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
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default connect(null, { fetchDepartments, fetchAllProductsName })(App);