import {
  SELECT_A_PRODUCT,
  FETCH_CATEGORIES
} from '../../types';

export default (state = 0, action) => {
  switch (action.type) {
    case SELECT_A_PRODUCT:
      return action.payload.productId;
    case FETCH_CATEGORIES:
      return 0;
    default:
      return state;
  }
};