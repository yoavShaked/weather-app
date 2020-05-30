import React from "react";
import { connect } from "react-redux";

import { get } from "lodash/fp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


import * as favoritesActions from "./../actions/favorites";

import ToggledComponent from "./../components/common/ToggledComponent";

const FavoriteAction = ({
  id,
  cityName,
  addToFavorites,
  removeFromFavorites,
}) => {
  const onClick = (toggledValue) => {
    if (toggledValue) {
      addToFavorites({
        cityId: id,
        cityName,
      });
    } else {
      removeFromFavorites(id);
    }
  };

  return (
    <ToggledComponent
      onClick={onClick}
      OnComponent={FavoriteIcon}
      OffComponent={FavoriteBorderIcon}
    />
  );
};

const mapStateToProps = (state) => ({
  id: get(["forcast", "cityId"], state),
  cityName: get(["forcast", "cityName"], state),
});

export default connect(mapStateToProps, {
  addToFavorites: favoritesActions.addToFavorites,
  removeFromFavorites: favoritesActions.removeFromFavorites,
})(FavoriteAction);
