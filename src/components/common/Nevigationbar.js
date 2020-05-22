import React, { useState } from "react";

import styled from "styled-components";
import _ from 'lodash';

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import Flexbox from "./Flexbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const pathCode = {
  '': 0,
  "favorites": 1
};

export default function Nevigationbar() {
  const classes = useStyles();
  const windowLocationPathName = _.trim(window.location.pathname, '/');
  const pathCodeValue = _.get(pathCode, windowLocationPathName) || 0;

  const [value, setValue] = useState(pathCodeValue);
  
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Container className={classes.root}>
      <Typography>Herolo Weather</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label={<Link to="/">Home</Link>} />
        <Tab label={<Link to="/favorites">Favorites</Link>} />
      </Tabs>
    </Container>
  );
}

const Container = styled(Flexbox)`
  justify-content: space-between;
  background-color: blue;

  .MuiTabs-root {
    height: 80px;
  }
  .MuiTabs-flexContainer {
    height: 100%;
  }
  .MuiTypography-body1 {
    width: fit-content;
    height: fit-content;
    margin: auto 0 auto 30px;
  }
`;
