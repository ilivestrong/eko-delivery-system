
import { TYPES } from "../actions";

const initialState = [];

export const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ROUTE:
      return state.concat(action.payload);
    case TYPES.GET_ROUTES:
      return state;
    default:
      return state;
  }
}