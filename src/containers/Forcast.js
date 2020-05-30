import {connect} from 'react-redux';
import { get } from "lodash/fp";

import * as weatherActions from "../actions/weather";

const mapStateToProps = (state) => ({
  weatherForcast: get(["forcast", "weatherForcast"], state),
  cityName: get(["forcast", "cityName"], state),
  isLoading: get(["forcast", "isLoading"], state),
  description: get(['forcast', 'description'], state)
});

export default connect(mapStateToProps, {
  setInitialForcast: weatherActions.setInitialForcast,
});
