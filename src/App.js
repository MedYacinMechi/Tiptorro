import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";
import PrivateRoute from "./route/PrivateRoute";
import Layout from "./layout/Index";
import Error404 from "./pages/error/404";

const App = () => {
  return (
    <Switch>
      {/*Error Page*/}
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404`} component={Error404}></Route>
      {/*Main Routes*/}
      <PrivateRoute exact path="" component={Layout}></PrivateRoute>
      <Route component={RedirectAs404}></Route>
    </Switch>
  );
};
export default withRouter(App);
