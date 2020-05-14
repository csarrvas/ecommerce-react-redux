import React from 'react';

const ProductsSearcher = ({ allProductsName, searchProduct, productsSearcher, departmentSelector }) => {
  const searchFor = (e) => {
    e.preventDefault();
    departmentSelector.current.value = '';
    searchProduct(productsSearcher.current.value.toLowerCase(), allProductsName);
  }

  return (
    <form onSubmit={searchFor}>
      <input ref={productsSearcher} id="search" type="text" placeholder="Search"/><i onClick={searchFor} className="fas fa-search"></i>
    </form>
  );
}
 
export default ProductsSearcher;