import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import NevigationBar from "./components/common/Nevigationbar";
import RouteConfig from "./RouteConfig";

const App = () => {
  return (
    <Router>
      <div>
        <NevigationBar />
        <RouteConfig />
      </div>
    </Router>
  );
};

export default App;
