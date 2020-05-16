import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART
} from '../../types';

export default (state = { count: 0, items: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      if (state.items.some(item => item.product_id === action.payload.product_id)) {
        return state;
      } else {
        return { count: state.count + 1, items: [...state.items, action.payload] };
      }
    case REMOVE_PRODUCT_FROM_CART:
      return { count: state.count - 1, items: state.items.filter(item => item.product_id !== action.payload) };
    case REMOVE_ALL_PRODUCTS_FROM_CART:
      return { count: 0, items: [] };
    default:
      return state;
  }
};