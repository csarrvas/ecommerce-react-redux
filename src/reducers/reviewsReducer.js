import {
  SELECT_A_PRODUCT,
  FETCH_CATEGORIES,
  MAKE_A_SEARCH,
  RESET
} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_A_PRODUCT:
      return action.payload.allProductReviews;
    case FETCH_CATEGORIES:
    case MAKE_A_SEARCH:
    case RESET:
      return [];
    default:
      return state;
  }
};