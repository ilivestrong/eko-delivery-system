import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { AppMenu } from "../components";
import { AppRouter } from "../common"
import { Store } from "../state";
import { TownContext } from "../common/contexts";
import { getTowns } from "../data";

const Layout = (props) => {
  return (
    <TownContext.Provider value={getTowns()}>
      <Provider store={Store}>
        <Router>
          <AppMenu title="EKO Delivery System" />
          <AppRouter />
        </Router>
      </Provider>
    </TownContext.Provider>
  )
}

export default Layout;