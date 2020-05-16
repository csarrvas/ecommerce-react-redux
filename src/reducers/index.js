import { combineReducers } from 'redux';
import departmentsReducer from './seeTheStoreReducers/departmentsReducer';
import departmentSelectedReducer from './seeTheStoreReducers/departmentSelectedReducer';
import categoriesReducer from './seeTheStoreReducers/categoriesReducer';
import categorySelectedReducer from './seeTheStoreReducers/categorySelectedReducer';
import productsReducer from './seeTheStoreReducers/productsReducer';
import productSelectedReducer from './seeTheStoreReducers/productSelectedReducer';
import allProductsNameReducer from './seeTheStoreReducers/allProductsNameReducer';
import reviewsReducer from './seeTheStoreReducers/reviewsReducer';
import loadingReducer from './loadingReducer';
import productReducer from './seeTheStoreReducers/productReducer';
import cartReducer from './buyReducers/cartReducer';
import taxesReducer from './buyReducers/taxesReducer';
import shippingRegionsReducer from './buyReducers/shippingRegionsReducer';
import shippingRegionDetailReducer from './buyReducers/shippingRegionDetailReducer';

export default combineReducers({
  departments: departmentsReducer,
  departmentSelected: departmentSelectedReducer,
  categories: categoriesReducer,
  categorySelected: categorySelectedReducer,
  products: productsReducer,
  productSelected: productSelectedReducer,
  allProductsName: allProductsNameReducer,
  product: productReducer,
  reviews: reviewsReducer,
  loading: loadingReducer,
  cart: cartReducer,
  taxes: taxesReducer,
  shippingRegions: shippingRegionsReducer,
  shippingRegionDetail: shippingRegionDetailReducer
});