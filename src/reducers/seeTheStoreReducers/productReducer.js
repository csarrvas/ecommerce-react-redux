import {
  SELECT_A_PRODUCT,
  FETCH_CATEGORIES,
  RESET
} from '../../types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_A_PRODUCT:
      return action.payload.product;
    case FETCH_CATEGORIES:
    case RESET:
      return {};
    default:
      return state;
  }
};