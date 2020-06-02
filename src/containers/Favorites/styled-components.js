import styled, { css } from "styled-components";
import Flexbox from "../../components/Flexbox";

export const WeatherItemContainer = styled(Flexbox)`
  width: 389px;
  min-height: 300px;
  justify-content: space-around;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: -3px 6px 41px 8px rgba(192, 206, 206, 0.49);
  .title {
    font-weight: 600;
    margin: 10px auto 0 auto;
    white-space: nowrap;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wind-icon {
    margin: 10px auto 0 auto;
  }
  .wind-row {
    margin: 0 auto;
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 250px;
  }
`;

export const WeatherItemRow = styled(Flexbox)`
  justify-content: space-evenly;
  align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  margin-bottom: 30px;
  @media screen and (max-width: 1240px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 100%;
  }
`;
