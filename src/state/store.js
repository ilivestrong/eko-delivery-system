import { createStore } from "redux";
import {
  routesReducer
} from "./reducers";

const store = createStore(routesReducer);

export default store;
