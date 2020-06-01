import React from "react";
import { connect } from "react-redux";

import { get } from "lodash/fp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import * as favoritesActions from "../../actions/favorites";

import ToggledComponent from "../../components/ToggledComponent";

const FavoriteAction = ({
  cityId,
  cityName,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  const onClick = (toggledValue) => {
    if (toggledValue) {
      addToFavorites({
        cityName,
        cityId,
      });
    } else {
      removeFromFavorites(cityName);
    }
  };

  return (
    <ToggledComponent
      initialValue={isFavorite}
      onClick={onClick}
      OnComponent={FavoriteIcon}
      OffComponent={FavoriteBorderIcon}
    />
  );
};

const mapStateToProps = (state) => {
  const cityName = get(["forcast", "cityName"], state);
  const isFavorite = !!get(["favorites", "favorites", cityName], state);
  return {
    cityId: get(["forcast", "cityId"], state),
    cityName,
    isFavorite,
  };
};

export default connect(mapStateToProps, {
  addToFavorites: favoritesActions.addToFavorites,
  removeFromFavorites: favoritesActions.removeFromFavorites,
})(FavoriteAction);
