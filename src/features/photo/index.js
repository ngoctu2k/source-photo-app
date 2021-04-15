import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";

function Photo(props) {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url} component={MainPage} />
        <Route  exact path={`${match.url}/add`} component={AddEditPage} />
        <Route path={`${match.url}/:photoId`} component={AddEditPage} />
      </Switch>
    </>
  );
}

export default Photo;
