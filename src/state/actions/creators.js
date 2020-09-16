import {
  CREATE_ROUTE,
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

export {
  createRoute,
}