import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  CreateRoute,
  DeliveryCost,
  RoutesAvailability,
} from "../components";

const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/create" component={CreateRoute} />
      <Route exact path="/cost" component={DeliveryCost} />
      <Route exact path="/availability" component={RoutesAvailability} />
      <Route path="*">
        <Redirect to="/create" />
      </Route>
    </Switch>
  </div>
)

export default AppRouter;