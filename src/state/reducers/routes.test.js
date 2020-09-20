import { routesReducer } from "./routes";
import { TYPES } from "../actions";

it("expect to add a new route by dispatching CREATE_ROUTE action to routesReducer() ", () => {
  
  // arrange
  const initialState = {
    routes: []
  }
  const fakeAction = {
    type: TYPES.CREATE_ROUTE,
    payload: {
      from: "A",
      to: "B",
      cost: 5
    }
  }

  // act
  const result = routesReducer(initialState, fakeAction);

  // assert
  expect(result.routes.length).toBe(1);
});

it("expect to add nothing by dispatching an invalid action to routesReducer() ", () => {
  
  // arrange
  const initialState = {
    routes: []
  }
  const fakeAction = {
    type: "THIS_ACTION_IS_INVALID",
    payload: {
      from: "A",
      to: "B",
      cost: 5
    }
  }

  // act
  const result = routesReducer(initialState, fakeAction);

  // assert
  expect(result.routes.length).toBe(0);
});