import {
  FETCH_SHIPPING_REGION_DETAIL
} from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SHIPPING_REGION_DETAIL:
      return action.payload;
    default:
      return [];
  }
};