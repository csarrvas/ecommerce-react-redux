import { FETCH_DEPARTMENTS } from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DEPARTMENTS:
      return action.payload;
    default:
      return state;
  }
};