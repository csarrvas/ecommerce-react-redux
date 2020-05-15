import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/seeTheStoreActions';
import Navegation from './inputs/Navegation';
import ProductsSearcher from './inputs/ProductsSearcher';
import './css/header.css';

const Header = ({ allProductsName, reset }) => {
  const productsSearcher = React.createRef();

  const login = () => {
    // create an action to login
  }

  const reload = () => {
    productsSearcher.current.value = '';
    reset();
  }

  return (
    <header>
      <figure onClick={reload}>
        <img alt="logo" src="/images/logo.png"/>
      </figure>
      <Navegation/>
      <ProductsSearcher productsSearcher={productsSearcher}/>
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

export default connect(null, { reset })(Header);