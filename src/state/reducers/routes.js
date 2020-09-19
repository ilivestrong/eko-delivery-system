
import { TYPES } from "../actions";

const initialState = {
  routes: [],
};

export const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ROUTE:
      return Object.assign(
        {},
        state,
        {
          routes:
            [
              ...state.routes, 
              action.payload,
            ]
        });
    case TYPES.GET_ROUTES:
      return state;
    default:
      return state;
  }
}
