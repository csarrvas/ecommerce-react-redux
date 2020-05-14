import {
  FETCH_DEPARTMENTS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  FETCH_ALL_PRODUCTS_NAME,
  SELECT_A_PRODUCT,
  MAKE_A_SEARCH,
  RESET,
  LOADING
} from '../types';

import {
  getDepartments,
  getCategories,
  getProductsByCategory,
  getAllProducts,
  getProductReviews } from '../apis/turing';

export const fetchDepartments = () => async dispatch => {
  dispatch({ type: LOADING });
  const response = await getDepartments();

  dispatch({
    type: FETCH_DEPARTMENTS,
    payload: response.data
  });
};

export const fetchCategories = departmentId => async dispatch => {
  dispatch({ type: LOADING });
  const response = await getCategories(departmentId);
  
  dispatch({
    type: FETCH_CATEGORIES,
    payload: {
      selectedDepartment: departmentId,
      categories: departmentId === 0 ? response.data.rows : response.data
    }
  });
};

export const fetchProductsByCategory = (categoryId, page) => async dispatch => {
  dispatch({ type: LOADING });
  const response = await getProductsByCategory(categoryId, page);
  
  dispatch({
    type: FETCH_PRODUCTS,
    payload: {
      selectedCategory: categoryId,
      countProducts: response.data.count,
      products: response.data.rows,
      actualPage: page
    }
  });
};

export const fetchProductsBySearch = (wantedProductsId, page) => async dispatch => {
  dispatch({ type: LOADING });
  const response = await getAllProducts();
  const products = response.data.rows.filter(product => {
    return wantedProductsId.indexOf(product.product_id) !== -1 ? product : null;
  });

  const limitedProducts = products.slice((0 + ((page - 1) * 10)), (10 + ((page - 1) * 10)));
  
  dispatch({
    type: FETCH_PRODUCTS,
    payload: {
      selectedCategory: 0,
      countProducts: products.length,
      products: limitedProducts,
      actualPage: page
    }
  });
};

export const fetchAllProductsName = () => async dispatch => {
  dispatch({ type: LOADING });
  const response = await getAllProducts();
  const allProductsName = response.data.rows.map(product => {
    return {
      id: product.product_id,
      name: product.name.toLowerCase()
    }
  });
  
  dispatch({
    type: FETCH_ALL_PRODUCTS_NAME,
    payload: allProductsName
  });
};

export const selectProduct = productId => async dispatch => {
  dispatch({ type: LOADING });
  const response = await getProductReviews(productId);
  
  dispatch({
    type: SELECT_A_PRODUCT,
    payload: {
      productId: productId,
      allProductReviews: response.data
    }
  });
};

export const searchProduct = (productToSearch, allProductsName) => async dispatch => {
  dispatch({ type: LOADING });
  const wantedProducts = allProductsName.filter(product =>
    product.name.includes(productToSearch) ? product.id : null
  );
  const wantedProductsId = wantedProducts.map(product => product.id);

  const response = await getAllProducts();
  const products = response.data.rows.filter(product => {
    return wantedProductsId.indexOf(product.product_id) !== -1 ? product : null;
  });

  const limitedProducts = products.slice(0, 10);
  
  dispatch({
    type: MAKE_A_SEARCH,
    payload: {
      wantedProductsId: wantedProductsId,
      selectedCategory: 0,
      countProducts: products.length,
      products: limitedProducts,
      actualPage: 1
    }
  });
};

export const reset = () => {
  return {
    type: RESET
  };
};