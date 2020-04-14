import React from "react";
import {connect} from 'react-redux';
import { getAllCountries } from './actions/countries';

const Index = ({_getTest}) => {
  _getTest();
  return <div>Hello React!</div>;
};

export default connect(null, {_getTest: getAllContries })(Index);