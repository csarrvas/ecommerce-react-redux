import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsSearcher = () => {

  const [ searchedWord, setSearchedWord ] = useState('');

  const toPreventDefault = (e) => {
    e.preventDefault();
  }

  const onInputChange = (e) => {
    setSearchedWord(e.target.value.toLowerCase().replace(' ', '-'));
  }

  return (
    <form onSubmit={toPreventDefault}>
      <input id="search" type="text" placeholder="Search" onChange={onInputChange}/>
      <Link to={`/products/search/${searchedWord}/page/1`}><i className="fas fa-search"></i></Link>
    </form>
  );
}
 
export default ProductsSearcher;