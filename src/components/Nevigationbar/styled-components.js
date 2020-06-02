import styled from 'styled-components';
import Flexbox from "../Flexbox";

const Container = styled(Flexbox)`
  justify-content: space-between;
  height: 80px;
  background: linear-gradient(
    90deg,
    rgba(84, 84, 171, 1) 0%,
    rgba(0, 0, 0, 1) 0%,
    rgba(7, 7, 11, 1) 100%,
    rgba(11, 219, 244, 1) 100%
  );

  .MuiTabs-root {
    height: 80px;
  }
  .MuiTabs-flexContainer {
    height: 100%;
    a {
      color: #fff;
      text-decoration: none;
      text-transform: capitalize;
    }
  }
  .title {
    width: fit-content;
    height: fit-content;
    color: #fff;
    margin: auto 0 auto 30px;
  }
  .MuiTypography-body1 {
    color: #fff;
  }
  .Config {
    margin: auto 0 auto 10px;
  }
  .MuiFormControlLabel-root {
    margin-left: 50px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
    top: 80px;
    .MuiTypography-body1 {
      color: black;
    }
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .with-dropdown {
    justify-content: space-between;
  }
  .MuiSvgIcon-root {
    color: white;
    width: 68px;
    height: 34px;
    margin-top: 24px;
  }
  .left-container-collapse {
    .MuiFormControlLabel-root {
      margin-left: 0;
    }
  }
`;

export default Container;