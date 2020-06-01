import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import NevigationBar from "./components/Nevigationbar";
import RouteConfig from "./RouteConfig";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(84, 84, 171, 1) 0%,
    rgba(53, 142, 202, 1) 0%,
    rgba(11, 219, 244, 1) 100%,
    rgba(3, 0, 46, 1) 100%
  );
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