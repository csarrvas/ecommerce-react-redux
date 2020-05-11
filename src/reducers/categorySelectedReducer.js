import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  MAKE_A_SEARCH,
  RESET
} from '../types';

export default (state = 0, action) => {
  switch (action.type) {
    case MAKE_A_SEARCH:
    case FETCH_PRODUCTS:
      return action.payload.selectedCategory;
    case FETCH_CATEGORIES:
    case RESET:
      return 0;
    default:
      return state;
  }
};