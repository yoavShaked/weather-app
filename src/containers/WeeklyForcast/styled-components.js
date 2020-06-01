import styled from "styled-components";

import Flexbox from "../../components/Flexbox";

export const WeatherItemContainer = styled(Flexbox)`
  margin: 20px;
  flex-wrap: wrap;
`;

export const Container = styled(Flexbox)`
  border: 1px solid;
  border-radius: 7px;
  height: 209px;
  border-color: #27c2ffc7;
  -webkit-box-shadow: 2px 2px 13px 5px #27c2ffc7;
  box-shadow: 2px 2px 13px 5px rgba(39, 194, 255, 0.78);
`;
