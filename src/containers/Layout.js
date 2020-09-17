import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { AppMenu } from "../components";
import { AppRouter } from "../common"
import { Store } from "../state";

const Layout = (props) => {
  return (
    <Provider store={Store}>
      <Router>
        <AppMenu title="EKO Delivery System" />
        <AppRouter />
      </Router>
    </Provider>
  )
}

export default Layout;