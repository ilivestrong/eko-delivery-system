
// import { getTowns } from "../common";

import {
  TYPES
} from "../actions";

const initialState = [];

export const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ROUTE:
      break;
    default:
      return state;
  }
}