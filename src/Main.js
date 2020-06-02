import React from "react";

import { HashRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import NevigationBar from "./components/Nevigationbar";
import RouteConfig from "./RouteConfig";

const Container = styled.div`
  height: 100vh;
`;

const Main = () => {
  return (
    <Router>
      <Container>
        <NevigationBar />
        <RouteConfig />
      </Container>
    </Router>
  );
};

export default Main;