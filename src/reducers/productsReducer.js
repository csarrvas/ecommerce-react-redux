import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  MAKE_A_SEARCH,
  RESET
} from '../types';

export default (state = { countProducts: 0, products: [] }, action) => {
  switch (action.type) {
    case MAKE_A_SEARCH:
    case FETCH_PRODUCTS:
      return {
        countProducts: action.payload.countProducts,
        products: action.payload.products
      };
    case FETCH_CATEGORIES:
    case RESET:
      return { countProducts: 0, products: [] }
    default:
      return state;
  }
};