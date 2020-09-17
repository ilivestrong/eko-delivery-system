
import { TYPES } from "../actions";

const initialState = [];

export const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ROUTE:
      const newState = state.concat(action.payload);
      console.log(newState);
      return newState;
    case TYPES.GET_ROUTES:
      return state;
    default:
      return state;
  }
}