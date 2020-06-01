import React from 'react';
import PropTypes  from 'prop-types';

import { Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";


const Toast = ({severity, context}) => {
    return (
      <Alert severity={severity}>
        <Typography>{context}</Typography>
      </Alert>
    );
};

Toast.propTypes = {
  severity: PropTypes.oneOf(["success", "error"]),
  context: PropTypes.any.isRequired
};

Toast.defaultProps = {
  severity: 'error'
};

export default Toast;