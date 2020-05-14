import { FETCH_ALL_PRODUCTS_NAME } from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_NAME:
      return action.payload;
    default:
      return state;
  }
};