import {
  FETCH_CATEGORIES,
  MAKE_A_SEARCH,
  RESET
} from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload.categories;
    case MAKE_A_SEARCH:
    case RESET:
      return [];
    default:
      return state;
  }
};