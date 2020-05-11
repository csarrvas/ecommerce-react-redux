import _ from 'lodash';
import turing from '../apis/turing';

import {
  FETCH_DEPARTMENTS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  FETCH_ALL_PRODUCTS_NAME,
  SELECT_A_PRODUCT,
  MAKE_A_SEARCH,
  RESET
} from '../types';

export const fetchDepartments = () => async dispatch => {
  const response = await turing.get('/departments');

  dispatch({
    type: FETCH_DEPARTMENTS,
    payload: response.data
  });
};

export const fetchCategories = departmentId => async dispatch => {
  const url = departmentId === 0
    ? '/categories'
    : `/categories/inDepartment/${departmentId}`;
  const response = await turing.get(url);
  
  dispatch({
    type: FETCH_CATEGORIES,
    payload: {
      selectedDepartment: departmentId,
      categories: departmentId === 0 ? response.data.rows : response.data
    }
  });
};

export const fetchProductsByCategory = (categoryId, page) => async dispatch => {
  const url = categoryId === 0
    ? `/products?page=${page}&limit=10`
    : `/products/inCategory/${categoryId}?page=${page}&limit=10`;
  const response = await turing.get(url);
  
  dispatch({
    type: FETCH_PRODUCTS,
    payload: {
      selectedCategory: categoryId,
      countProducts: response.data.count,
      products: response.data.rows
    }
  });
};

export const fetchProductsBySearch = (wantedProductsId, page) => async dispatch => {
  const response = await turing.get('/products?page=1&limit=200');
  const products = response.data.rows.filter(product => {
    return wantedProductsId.indexOf(product.product_id) !== -1 ? product : null;
  });

  const limitedProducts = products.slice((0 + ((page - 1) * 10)), (10 + ((page - 1) * 10)));
  
  dispatch({
    type: FETCH_PRODUCTS,
    payload: {
      selectedCategory: 0,
      countProducts: products.length,
      products: limitedProducts
    }
  });
};

export const fetchAllProductsName = () => async dispatch => {
  const response = await turing.get('/products?page=1&limit=200');
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
  const response = await turing.get(`/products/${productId}/reviews`);
  
  dispatch({
    type: SELECT_A_PRODUCT,
    payload: {
      productId: productId,
      allProductReviews: response.data
    }
  });
};

export const searchProduct = (productToSearch, allProductsName) => async dispatch => {
  const wantedProducts = allProductsName.filter(product =>
    product.name.includes(productToSearch) ? product.id : null
  );
  const wantedProductsId = wantedProducts.map(product => product.id);

  const response = await turing.get('/products?page=1&limit=200');
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
      products: limitedProducts
    }
  });
};

export const reset = () => {
  return {
    type: RESET
  };
};

// ***** Solving overfeaching with memoize *****
// export const fetchCategories = departmentId => dispatch => _fetchCategories(departmentId, dispatch);
// const _fetchCategories = _.memoize(async (departmentId, dispatch) => {
//   const url = departmentId === 0
//     ? '/categories'
//     : `/categories/inDepartment/${departmentId}`;
//   const response = await turing.get(url);
//   console.log(departmentId);
//   dispatch({
//     type: FETCH_CATEGORIES,
//     payload: {
//       selectedDepartment: departmentId,
//       categories: departmentId === 0 ? response.data.rows : response.data
//     }
//   });
// });

// export const fetchProductsByCategory = (categoryId, page) => dispatch => _fetchProductsByCategory(categoryId, page, dispatch);
// const _fetchProductsByCategory = _.memoize(async (categoryId, page, dispatch) => {
//   const url = categoryId === 0
//     ? `/products?page=${page}&limit=10`
//     : `/products/inCategory/${categoryId}?page=${page}&limit=10`;
//   const response = await turing.get(url);
  
//   dispatch({
//     type: FETCH_PRODUCTS,
//     payload: {
//       selectedCategory: categoryId,
//       countProducts: response.data.count,
//       products: response.data.rows
//     }
//   });
// });

// export const fetchProductsBySearch = (wantedProductsId, page) => dispatch => _fetchProductsBySearch(wantedProductsId, page, dispatch);
// const _fetchProductsBySearch = _.memoize(async (wantedProductsId, page, dispatch) => {
//   const response = await turing.get('/products?page=1&limit=200');
//   const products = response.data.rows.filter(product => {
//     return wantedProductsId.indexOf(product.product_id) !== -1 ? product : null;
//   });

//   const limitedProducts = products.slice((0 + ((page - 1) * 10)), (10 + ((page - 1) * 10)));
  
//   dispatch({
//     type: FETCH_PRODUCTS,
//     payload: {
//       selectedCategory: 0,
//       countProducts: products.length,
//       products: limitedProducts
//     }
//   });
// });