import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { get, debounce, map, find } from "lodash/fp";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { UNIT_TYPE } from "../constants/titles";
import * as weatherActions from "../actions/weather";

const mapOption = (option) => get("cityName", option);

const SerachInput = ({
  options,
  placeholder,
  getLocationAutocomplete,
  getDailyForcast,
  unitType,
}) => {
  const handleInputChange = (_, value) => {
    if (value) {
      const location = find(
        (option) => value === get("cityName", option),
        options
      );
      if (location) {
        getDailyForcast(
          {
            cityId: get("cityId", location),
            metric: unitType === UNIT_TYPE.CELSIUS,
          },
          {
            cityName: get("cityName", location),
          }
        );
      } else {
        getLocationAutocomplete(value);
      }
    }
  };

  const onInputChange = debounce(2000, handleInputChange);

  const renderInput = (params) => (
    <TextField
      placeholder={placeholder}
      {...params}
      margin="normal"
      variant="outlined"
    />
  );

  return (
    <Autocomplete
      freeSolo
      options={map(mapOption, options)}
      onInputChange={onInputChange}
      renderInput={renderInput}
    />
  );
};

SerachInput.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  getLocationAutocomplete: PropTypes.func.isRequired,
  getDailyForcast: PropTypes.func.isRequired,
};

SerachInput.defaultProps = {
  options: [],
  placeholder: "Search City",
};

const mapStateToProps = (state) => {
  const options = (get(["weather", "suggestedLocations"], state) || []).map(
    (option) => ({
      cityName: get(["AdministrativeArea", "LocalizedName"], option),
      cityId: get("Key", option),
    })
  );

  const unitType = get(["config", "unitType"], state);
  console.log('unit type', unitType);
  
  return {
    options,
    unitType,
  };
};

export default connect(mapStateToProps, {
  getLocationAutocomplete: weatherActions.getLocationAutocomplete,
  getDailyForcast: weatherActions.getDailyForcast,
})(SerachInput);