import styled from "styled-components";

const Icon = styled.div`
  background-image: url(${(props) => `src/icons/${props.img}.png`});
  width: ${({ width }) => width || "75px"};
  height: ${({ height }) => height || "45px"};
`;

export default Icon;