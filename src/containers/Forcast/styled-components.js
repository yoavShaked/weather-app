import styled from "styled-components";
import Flexbox from "../../components/Flexbox";

export const Container = styled(Flexbox)`
  width: 800px;
  margin: 40px auto auto auto;
  .MuiTypography-body1 {
    margin: 0 auto;
    color: #fff;
  }
`;

export const ActionsContainer = styled(Flexbox)`
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
`;
