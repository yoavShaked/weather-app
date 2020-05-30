import React from "react";

import Flexbox from "../common/Flexbox";
import SearchInput from "../common/SearchInput";
import Forcast from "../common/Forcast";
import styled from "styled-components";

const ComponentName = () => {
  return (
    <>
      <SearchInput />
      <Forcast />
    </>
  );
};

const Card = styled(Flexbox)`
  width: 10px;
  background: #ffffff;
`;

export default ComponentName;
