import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import Home from "../pages/Home";

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*HomePage*/}
        <Route exact path="/" render={() => <Redirect to={`${process.env.PUBLIC_URL}/_home`} />} />
        <Route exact path={`${process.env.PUBLIC_URL}/_home`} component={Home}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
