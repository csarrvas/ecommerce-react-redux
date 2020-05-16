import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchCategories,
  fetchProductsByCategory,
  fetchProductsBySearch,
  selectProduct } from '../actions/seeTheStoreActions';
import {
  addToCart,
  removeFromCard,
  cleanCard,
  fetchShippingRegionDetail } from '../actions/buyActions'
import DisplayDepartments from './DisplayDepartments';
import DisplayCategories from './DisplayCategories';
import DisplayProducts from './DisplayProducts';
import DisplayProduct from './DisplayProduct';
import DisplayCart from './DisplayCart';
import Home from './Home';
import Error404 from './Error404';

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
    selectProduct,
    cart,
    taxes,
    shippingRegions,
    shippingRegionDetail,
    addToCart,
    removeFromCard,
    cleanCard,
    fetchShippingRegionDetail
  } = props
  
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
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
              addToCart={addToCart}
            />}
        />
        <Route
          path="/cart"
          render={(props) =>
            <DisplayCart
              {...props}
              cart={cart}
              taxes={taxes}
              shippingRegions={shippingRegions}
              shippingRegionDetail={shippingRegionDetail}
              fetchShippingRegionDetail={fetchShippingRegionDetail}
              removeFromCard={removeFromCard}
              cleanCard={cleanCard}
            />}
        />
        <Route component={Error404}/>
      </Switch>
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
    reviews: state.reviews,
    taxes: state.taxes,
    shippingRegions: state.shippingRegions,
    shippingRegionDetail: state.shippingRegionDetail,
    cart: state.cart
  };
}

export default connect(mapStateToProps, { 
  fetchCategories,
  fetchProductsByCategory,
  fetchProductsBySearch,
  selectProduct,
  addToCart,
  removeFromCard,
  cleanCard,
  fetchShippingRegionDetail })(Main);