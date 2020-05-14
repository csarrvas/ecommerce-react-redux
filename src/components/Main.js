import React from 'react';
import { connect } from 'react-redux';
import DisplayProduct from './DisplayProduct';
import DisplayProducts from './DisplayProducts';
import DisplayCategories from './DisplayCategories';
import DisplayDepartments from './DisplayDepartments';
import Spinner from './Spinner';
import {
  fetchDepartments,
  fetchCategories,
  fetchProductsByCategory,
  fetchProductsBySearch,
  searchProduct,
  selectProduct,
  reset } from '../actions/seeTheStoreActions';

const Main = (props) => {

  const {
    departments,
    categories,
    products,
    departmentSelected,
    categorySelected,
    productSelected,
    search,
    reviews,
    loading } = props;

  const {
    fetchCategories,
    fetchProductsByCategory,
    fetchProductsBySearch,
    selectProduct} = props;

  const error = document.querySelector('#error');
  if (error) error.remove();

  const displayContent = () => {
    if (loading) {
      return <Spinner/>
    } else if (productSelected !== 0) {
      return (
        <DisplayProduct
          product={products.products.filter(product => product.product_id === productSelected)[0]}
          reviews={reviews}
        />
      );

    } else if (categorySelected !== 0 || search.searching) {
      return (
        <DisplayProducts
          products={products}
          categorySelected={categorySelected}
          search={search}
          fetchProductsByCategory={fetchProductsByCategory}
          fetchProductsBySearch={fetchProductsBySearch}
          selectProduct={selectProduct}
        />
      );

    } else if (departmentSelected !== -1 && categories.length !== 0) {
      return (
        <DisplayCategories
          categories={categories}
          fetchProductsByCategory={fetchProductsByCategory}
        />
      );

    } else {
      return (
        <DisplayDepartments
          departments={departments}
          fetchCategories={fetchCategories}
        />
      );
    }
  }

  return (
    <main>
      {displayContent()}
    </main>
  );
}

const mapStateToProps = state => {
  return {
    departments: state.departments,
    categories: state.categories,
    products: state.products,
    departmentSelected: state.departmentSelected,
    categorySelected: state.categorySelected,
    productSelected: state.productSelected,
    search: state.search,
    reviews: state.reviews,
    loading: state.loading
  };
}

export default connect(mapStateToProps, {
  fetchDepartments,
  fetchCategories,
  fetchProductsByCategory,
  fetchProductsBySearch,
  searchProduct,
  selectProduct,
  reset})(Main);