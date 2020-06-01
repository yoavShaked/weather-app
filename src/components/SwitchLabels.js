import React, { useState } from "react";
import PropTypes from "prop-types";
import { isFunction } from "lodash/fp";
import { FormControlLabel, Switch } from "@material-ui/core";

export default function SwitchLabels({
  checkedLabel,
  uncheckedLabel,
  afterChange,
}) {
  const [state, setState] = useState({
    checked: true,
    label: checkedLabel,
  });

  const handleChange = (event) => {
    const { checked } = event.target;
    const label = checked ? checkedLabel : uncheckedLabel;
    if (isFunction(afterChange)) {
      afterChange(label);
    }
    setState({
      checked,
      label,
    });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          color="primary"
        />
      }
      label={state.label}
    />
  );
}

SwitchLabels.propTypes = {
  checkedLabel: PropTypes.string,
  uncheckedLabel: PropTypes.string,
  afterChange: PropTypes.func,
};
