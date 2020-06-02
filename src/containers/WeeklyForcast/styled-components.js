import styled from "styled-components";

import Flexbox from "../../components/Flexbox";

export const WeatherItemContainer = styled(Flexbox)`
  flex-wrap: wrap;
  margin: 15px 30px 20px;
  border-radius: 5px;
  box-shadow: -3px 6px 41px 8px rgba(192, 206, 206, 0.49);
  width: 120px;
  height: 150px;
  align-items: center;
  padding-top: 20px;
  .description {
    white-space: nowrap;
    width: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 55px;
  }
`;

export const Container = styled(Flexbox)`
  height: 209px;
  justify-content: center;
  @media screen and (max-width: 890px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
  }
`;
