import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchCategories,
  fetchProductsByCategory,
  fetchProductsBySearch,
  selectProduct } from '../actions/seeTheStoreActions';
import DisplayDepartments from './DisplayDepartments';
import DisplayCategories from './DisplayCategories';
import DisplayProducts from './DisplayProducts';
import DisplayProduct from './DisplayProduct';

const Main = (props) => {
  const {
    departments,
    categories,
    products,
    countProducts,
    allProductsName,
    loading,
    product,
    reviews,
    fetchCategories,
    fetchProductsByCategory,
    fetchProductsBySearch,
    selectProduct
  } = props

  return (
    <main>
      <Route
        path="/departments"
        render={(props) =>
          <DisplayDepartments
            {...props}
            departments={departments}
            loading={loading}
          />}
      />
      <Route
        path="/categories/inDepartment/:departmentId"
        render={(props) =>
          <DisplayCategories
            {...props}
            categories={categories}
            loading={loading}
            fetchCategories={fetchCategories}
          />}
      />
      <Route
        path="/products/inCategory/:categoryId/page/:pageNumber"
        render={(props) =>
          <DisplayProducts
            {...props}
            countProducts={countProducts}
            products={products}
            allProductsName={allProductsName}
            loading={loading}
            fetchProductsByCategory={fetchProductsByCategory}
            fetchProductsBySearch={fetchProductsBySearch}
          />}
      />
      <Route
        path="/products/search/:searchedWord/page/:pageNumber"
        render={(props) =>
          <DisplayProducts
            {...props}
            countProducts={countProducts}
            products={products}
            allProductsName={allProductsName}
            loading={loading}
            fetchProductsByCategory={fetchProductsByCategory}
            fetchProductsBySearch={fetchProductsBySearch}
          />}
      />
      <Route
        path="/products/:productId" exact
        render={(props) =>
          <DisplayProduct
            {...props}
            product={product}
            reviews={reviews}
            loading={loading}
            selectProduct={selectProduct}
          />}
      />
    </main>
  );
}

const mapStateToProps = state => {
  return {
    departments: state.departments,
    categories: state.categories,
    products: state.products.products,
    loading: state.loading,
    countProducts: state.products.countProducts,
    allProductsName: state.allProductsName,
    product: state.product,
    reviews: state.reviews
  };
}

export default connect(mapStateToProps, { fetchCategories, fetchProductsByCategory, fetchProductsBySearch, selectProduct })(Main);