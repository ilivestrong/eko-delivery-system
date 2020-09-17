import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { AppMenu } from "../components";
import { AppRouter } from "../common"

const Layout = (props) => {
  return (
    <Router>
      <AppMenu title="EKO Delivery System" />
      <AppRouter />
    </Router>
  )
}

export default Layout;