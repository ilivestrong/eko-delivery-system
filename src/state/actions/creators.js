import {
  BUILD_DELIVERY_ROUTE,
  CREATE_ROUTE,
  GET_DELIVERY_ROUTE_COST,  
} from "./types";

const createRoute = (from, to, cost) => {
  return {
    type: CREATE_ROUTE,
    payload: {
      from,
      to,
      cost,
    }
  }
}

const getDeliveryCost = (routeSequence) => {
  return {
    type: GET_DELIVERY_ROUTE_COST,
    payload: routeSequence
  }
}

const buildDeliveryRoute = (selectedTown) => {
  return {
    type: BUILD_DELIVERY_ROUTE,
    payload: selectedTown
  }
}

export {
  createRoute,
  getDeliveryCost,
  buildDeliveryRoute,
}