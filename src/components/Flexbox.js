import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

export default Flexbox;
