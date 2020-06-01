import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {get, values, map} from 'lodash/fp';

import * as favoritesActions from '../../actions/favorites';
import ErrorBoundary from "./../common/ErrorBoundary";

const Favorites = ({ favorites }) => {
  return <div>Favorites</div>;
};

const mapStateToProps = (state) => ({
  favorites: get(['favorites', 'favorites'], state)
})

export default connect(mapStateToProps)(Favorites);