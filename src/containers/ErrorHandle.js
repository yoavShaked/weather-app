import React from "react";
import { get } from "lodash/fp";
import { connect } from "react-redux";

const ErrorHandler = ({ errorMessage, children }) => {
  if (errorMessage) {
    throw new Error(errorMessage);
  }
  return children;
};

const mapStateToProps = (state, { reducerName }) => ({
  errorMessage: get([reducerName, "errorMessage"], state),
});

export default connect(mapStateToProps)(ErrorHandler);
