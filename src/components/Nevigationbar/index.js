import React, { useState } from "react";

import _ from "lodash";
import { Link } from "react-router-dom";
import { Tabs, Tab, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { TABS, APP_TITLE } from "../../constants/titles";
import { useWindowSize } from "../../utils/hooks";
import Flexbox from "../Flexbox";
import Config from "../Config";
import Container from './styled-components';

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
