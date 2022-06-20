import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ exact, component: Component, ...rest }) => (
  <Route
    exact={exact ? true : false}
    rest
    render={(props) => <Component {...props} {...rest}></Component>}
  ></Route>
);

export default PrivateRoute;
