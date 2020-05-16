import {
  FETCH_CATEGORIES
} from '../../types';

export default (state = 0, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload.selectedDepartment;
    default:
      return state;
  }
};