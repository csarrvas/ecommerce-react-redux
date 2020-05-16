import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES
} from '../../types';

export default (state = 0, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.selectedCategory;
    case FETCH_CATEGORIES:
      return 0;
    default:
      return state;
  }
};