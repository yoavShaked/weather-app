import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { get, debounce, map } from "lodash/fp";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import * as weatherActions from "../../actions/weather";

const mapOption = (option) => get("cityName", option);

const SerachInput = ({ options, placeholder, getLocationAutocomplete }) => {
  const handleInputChange = (_, value) => {
    if (value) {
      getLocationAutocomplete(value);
    }
  };

  const onInputChange = debounce(2000, handleInputChange);

  return (
    <Autocomplete
      freeSolo
      options={map(mapOption, options)}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <TextField
          placeholder={placeholder}
          {...params}
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
};

SerachInput.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  getLocationAutocomplete: PropTypes.func.isRequired,
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
  return {
    options,
  };
};

export default connect(mapStateToProps, {
  getLocationAutocomplete: weatherActions.getLocationAutocomplete,
})(SerachInput);
