import {
  FETCH_SHIPPING_REGIONS
} from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SHIPPING_REGIONS:
      return action.payload;
    default:
      return state;
  }
};