import styled from "styled-components";

const Flexbox = styled.div`
display: flex;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
`;

export default Flexbox;