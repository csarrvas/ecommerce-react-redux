import React from 'react';
import Navegation from './inputs/Navegation';
import ProductsSearcher from './inputs/ProductsSearcher';
import { Link } from 'react-router-dom';
import './css/header.css';

const Header = () => {

  return (
    <header>
      <figure>
        <Link to="/">
          <img alt="logo" src="/images/logo.png"/>
        </Link>
      </figure>
      <Navegation/>
      <ProductsSearcher/>
      <div id="user-actions">
        <div id="login">
          <Link to="/">
            <p>Log in <i className="far fa-user"></i></p>
          </Link>
        </div>
        <div id="cart">
          <Link to="/cart">
            <p>Cart <i className="fas fa-cart-arrow-down"></i></p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;