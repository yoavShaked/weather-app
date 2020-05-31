import React from "react";

import ErrorBoundary from './../common/ErrorBoundary';
import SearchInput from "../../containers/SearchInput";
import Forcast from "../../containers/Forcast";

const Home = () => {
  return (
    <ErrorBoundary>
      <SearchInput />
      <Forcast />
    </ErrorBoundary>
  );
};

export default Home;
