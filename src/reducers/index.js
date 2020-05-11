import { combineReducers } from 'redux';
import departmentsReducer from './departmentsReducer';
import departmentSelectedReducer from './departmentSelectedReducer';
import categoriesReducer from './categoriesReducer';
import categorySelectedReducer from './categorySelectedReducer';
import productsReducer from './productsReducer';
import productSelectedReducer from './productSelectedReducer';
import allProductsNameReducer from './allProductsNameReducer';
import searchReducer from './searchReducer';
import reviewsReducer from './reviewsReducer';

export default combineReducers({
  departments: departmentsReducer,
  departmentSelected: departmentSelectedReducer,
  categories: categoriesReducer,
  categorySelected: categorySelectedReducer,
  products: productsReducer,
  productSelected: productSelectedReducer,
  allProductsName: allProductsNameReducer,
  search: searchReducer,
  reviews: reviewsReducer
});