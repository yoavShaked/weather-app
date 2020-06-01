import React from 'react';
import {connect} from 'react-redux';

import { UNIT_TYPE } from "../constants/titles";
import * as configActions from '../actions/config';

import SwitchLabels from "./SwitchLabels";

const Config = ({ setUnitType }) => {
    return (
      <SwitchLabels
        afterChange={setUnitType}
        checkedLabel={UNIT_TYPE.CELSIUS}
        uncheckedLabel={UNIT_TYPE.FAHRENHEIT}
      />
    );
};

export default connect(null, {
  setUnitType: configActions.setUnitType,
})(Config);