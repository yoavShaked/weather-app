import React, { useState } from "react";

import styled from "styled-components";
import _ from "lodash";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography } from "@material-ui/core";

import { TABS, APP_TITLE } from "../../constants/titles";

import Flexbox from "./Flexbox";
import Config from "./Config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const pathCode = {
  "": 0,
  favorites: 1,
};

export default function Nevigationbar() {
  const classes = useStyles();
  const windowLocationPathName = _.trim(window.location.pathname, "/");
  const pathCodeValue = _.get(pathCode, windowLocationPathName) || 0;

  const [value, setValue] = useState(pathCodeValue);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Container className={classes.root}>
      <Flexbox>
        <Typography className='title'>{APP_TITLE}</Typography>
        <Config className="Config" />
      </Flexbox>
      <Tabs value={value} onChange={handleChange}>
        <Tab label={<Link to="/">{TABS.HOME}</Link>} />
        <Tab label={<Link to="/favorites">{TABS.FAVORITES}</Link>} />
      </Tabs>
    </Container>
  );
}

const Container = styled(Flexbox)`
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(84, 84, 171, 1) 0%,
    rgba(11, 219, 244, 1) 100%,
    rgba(3, 0, 46, 1) 100%
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
`;
