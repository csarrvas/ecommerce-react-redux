import {
  FETCH_CATEGORIES
} from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload.categories;
    default:
      return state;
  }
};