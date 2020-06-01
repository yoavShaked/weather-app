import React from "react";

import ErrorBoundary from "./ErrorBoundary";
import SearchInput from "../containers/SearchInput";
import Forcast from "../containers/Forcast";

const Home = () => {
  return (
    <>
      <SearchInput />
      <ErrorBoundary>
        <Forcast />
      </ErrorBoundary>
    </>
  );
};

export default Home;
