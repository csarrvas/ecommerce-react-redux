import {
  FETCH_CATEGORIES,
  MAKE_A_SEARCH,
  RESET
} from '../../types';

export default (state = 0, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload.selectedDepartment;
    case MAKE_A_SEARCH:
    case RESET:
      return 0;
    default:
      return state;
  }
};