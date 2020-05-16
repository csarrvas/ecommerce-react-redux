import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchDepartments, fetchAllProductsName } from '../actions/seeTheStoreActions';
import { fetchTaxes, fetchShippingRegions } from '../actions/buyActions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './css/app.css';

const App = ({ fetchDepartments, fetchAllProductsName, fetchTaxes, fetchShippingRegions }) => {
  useEffect(() => {
    fetchDepartments();
    fetchAllProductsName();
    fetchTaxes();
    fetchShippingRegions();
  }, [fetchDepartments, fetchAllProductsName, fetchTaxes, fetchShippingRegions]);

  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default connect(null, { fetchDepartments, fetchAllProductsName, fetchTaxes, fetchShippingRegions })(App);