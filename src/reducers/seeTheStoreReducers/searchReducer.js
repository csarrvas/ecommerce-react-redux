import {
  MAKE_A_SEARCH,
  FETCH_CATEGORIES,
  RESET
} from '../../types';

export default (state = { searching: false, wantedProductsId: [] }, action) => {
  switch (action.type) {
    case MAKE_A_SEARCH:
      return { searching: true, wantedProductsId: action.payload.wantedProductsId };
    case FETCH_CATEGORIES:
    case RESET:
      return { searching: false, wantedProductsId: [] };
    default:
      return state;
  }
};