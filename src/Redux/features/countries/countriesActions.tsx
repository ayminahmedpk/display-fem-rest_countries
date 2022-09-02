

import { Countries } from "../../features/countries/CountriesTypes";


export type FetchCountriesRequestAction = {type: 'FETCH_COUNTRIES_REQUEST';}
export type FetchCountriesSuccessAction = {
  type: 'FETCH_COUNTRIES_SUCCESS';
  payload: Countries;
}
export type FetchCountriesFailureAction = {
  type: 'FETCH_COUNTRIES_FAILURE';
  payload: string;
}



export type CountriesActions = FetchCountriesRequestAction
                             | FetchCountriesSuccessAction
                             | FetchCountriesFailureAction;

