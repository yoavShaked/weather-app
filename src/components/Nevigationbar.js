import React, { useState, useEffect } from "react";

import styled from "styled-components";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Tabs, Tab, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { TABS, APP_TITLE } from "../constants/titles";
import { useWindowSize } from '../utils/hooks';
import Flexbox from "./Flexbox";
import Config from "./Config";

const pathCode = {
  "": 0,
  favorites: 1,
};

export default function Nevigationbar() {
  const { width } = useWindowSize();
  const windowLocationPathName = _.trim(window.location.pathname, "/");
  const pathCodeValue = _.get(pathCode, windowLocationPathName) || 0;

  const [value, setValue] = useState(pathCodeValue);

  const handleChange = (_, newValue) => setValue(newValue);

  const dropDownMenu = (
    <div className="dropdown">
      <MenuIcon />
      <div class="dropdown-content">
        <Link to="/">
          <Typography>{TABS.HOME}</Typography>
        </Link>
        <Link to="/favorites">
          <Typography>{TABS.FAVORITES}</Typography>
        </Link>
      </div>
    </div>
  );

  if (width >= 487) {
    return (
      <Container>
        <Flexbox>
          <Typography className="title">{APP_TITLE}</Typography>
          <Config className="Config" />
        </Flexbox>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={<Link to="/">{TABS.HOME}</Link>} />
          <Tab label={<Link to="/favorites">{TABS.FAVORITES}</Link>} />
        </Tabs>
      </Container>
    );
  }
  return (
    <Container>
      <Flexbox className="left-container-collapse">
        <Typography className="title">{APP_TITLE}</Typography>
        <Config />
      </Flexbox>
      {dropDownMenu}
    </Container>
  );
}

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
