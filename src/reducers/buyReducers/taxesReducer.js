import {
  FETCH_TAXES
} from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TAXES:
      return action.payload;
    default:
      return state;
  }
};