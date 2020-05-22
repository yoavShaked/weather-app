import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";

const RouteConfig = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
};

export default RouteConfig;
