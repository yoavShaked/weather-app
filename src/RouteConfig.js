import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";

const RouteConfig = () => {
  return (
    <Switch>
      <Route path="/favorites" component={Favorites} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default RouteConfig;
