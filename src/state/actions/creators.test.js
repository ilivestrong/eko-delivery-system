import {
  createRoute
} from "./creators";


it("expect a payload property with {from,to,cost} object assigned using createRoute action creator", () => {
  // arrange
  const testRoute = {
    from: "A",
    to: "B",
    cost: 7,
  };

  // act 
  const action = createRoute(testRoute.from, testRoute.to, testRoute.cost);

  // assert
  expect(action.payload).toEqual(testRoute);

})