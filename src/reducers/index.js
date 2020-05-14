import { combineReducers } from 'redux';
import departmentsReducer from './seeTheStoreReducers/departmentsReducer';
import departmentSelectedReducer from './seeTheStoreReducers/departmentSelectedReducer';
import categoriesReducer from './seeTheStoreReducers/categoriesReducer';
import categorySelectedReducer from './seeTheStoreReducers/categorySelectedReducer';
import productsReducer from './seeTheStoreReducers/productsReducer';
import productSelectedReducer from './seeTheStoreReducers/productSelectedReducer';
import allProductsNameReducer from './seeTheStoreReducers/allProductsNameReducer';
import searchReducer from './seeTheStoreReducers/searchReducer';
import reviewsReducer from './seeTheStoreReducers/reviewsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  departments: departmentsReducer,
  departmentSelected: departmentSelectedReducer,
  categories: categoriesReducer,
  categorySelected: categorySelectedReducer,
  products: productsReducer,
  productSelected: productSelectedReducer,
  allProductsName: allProductsNameReducer,
  search: searchReducer,
  reviews: reviewsReducer,
  loading: loadingReducer
});