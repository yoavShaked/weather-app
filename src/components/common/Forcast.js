import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { get } from "lodash/fp";

import * as weatherActions from "../../actions/weather";

const Forcast = ({ setInitialForcast, dailyForcast }) => {
  useEffect(() => {
    setInitialForcast();
  }, []);
  
  if (!dailyForcast) return <div>Loading</div>;
  return <div>Forcast</div>;
};

const mapStateToProps = (state) => ({
  dailyForcast: get(["forcast", "dailyForcast"], state),
});

export default connect(mapStateToProps, {
  setInitialForcast: weatherActions.setInitialForcast,
})(Forcast);
