import React from "react";

import ErrorBoundary from "./ErrorBoundary";
import SearchInput from "../containers/SearchInput";
import Forcast from "../containers/Forcast";

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <SearchInput />
      </ErrorBoundary>
      <ErrorBoundary>
        <Forcast />
      </ErrorBoundary>
    </>
  );
};

export default Home;
