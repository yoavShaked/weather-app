import React from "react";

import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

import Flexbox from "../components/Flexbox";

const ForcastSkelaton = () => {
  return (
    <SkelatonContainer flexDirection="column">
      <Skeleton
        className="Skeleton-text"
        variant="text"
        width={127}
        height={24}
      />
      <Skeleton
        className="Skeleton-text"
        variant="text"
        width={264}
        height={24}
      />
      <Skeleton
        className="Skeleton-text"
        variant="text"
        width={450}
        height={24}
      />
      <SkelatonWeatherContainer>
        <Skeleton
          className="Skeleton-weather"
          variant="rect"
          width={100}
          height={170}
        />
        <Skeleton
          className="Skeleton-weather"
          variant="rect"
          width={100}
          height={170}
        />
        <Skeleton
          className="Skeleton-weather"
          variant="rect"
          width={100}
          height={170}
        />
        <Skeleton
          className="Skeleton-weather"
          variant="rect"
          width={100}
          height={170}
        />
        <Skeleton
          className="Skeleton-weather"
          variant="rect"
          width={100}
          height={170}
        />
      </SkelatonWeatherContainer>
    </SkelatonContainer>
  );
};

const SkelatonContainer = styled(Flexbox)`
  width: 800px;
  margin: 40px auto auto auto;
  .MuiSkeleton-pulse {
    border-radius: 5px;
  }
  .Skeleton-weather {
    margin: 0px 27px;
  }
  .Skeleton-text {
    margin: 0 auto;
  }
  .MuiSkeleton-root {
    background-color: #358eca;
  }
`;

const SkelatonWeatherContainer = styled(Flexbox)`
  margin-top: 40px;
`;

export default ForcastSkelaton;
