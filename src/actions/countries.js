import * as types from './types';
import httpAction from './httpRquest';
import httpRequest from '../endpoints/index';

export const getAllCountries = () => httpAction({
    type: types.GET_CUNTRIES,
    request: httpRequest
});