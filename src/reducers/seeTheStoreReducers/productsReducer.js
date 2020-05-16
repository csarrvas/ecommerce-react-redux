import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES
} from '../../types';

export default (state = { countProducts: 0, actualPage: 0, products: [] }, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        countProducts: action.payload.countProducts,
        actualPage: action.payload.actualPage,
        products: action.payload.products
      };
    case FETCH_CATEGORIES:
      return { countProducts: 0, actualPage: 0, products: [] }
    default:
      return state;
  }
};