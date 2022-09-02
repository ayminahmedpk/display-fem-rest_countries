

import { Dispatch } from "redux";
import { Countries } from "./CountriesTypes";
import { CountriesActions, FetchCountriesFailureAction, FetchCountriesRequestAction, FetchCountriesSuccessAction } from "./countriesActions";
import axios from "axios";

export const fetchCountriesRequest: () => FetchCountriesRequestAction = () => ({
  type: 'FETCH_COUNTRIES_REQUEST',
});

// Add the right type later on
export const fetchCountriesSuccess: (countriesData: Countries) => FetchCountriesSuccessAction = (
  countriesData) => ({
    type: 'FETCH_COUNTRIES_SUCCESS',
    payload: countriesData,
});

export const fetchCountriesFailure: (errorMessage: string) => FetchCountriesFailureAction = (
  errorMessage
) => ({
  type: "FETCH_COUNTRIES_FAILURE",
  payload: errorMessage,
});

// Add the right type later on
// export const fetchCountries = () => ( (dispatch: Dispatch<any>) => {
export const fetchCountries = () => ((dispatch: Dispatch<CountriesActions>) => {
  dispatch(fetchCountriesRequest());
  axios.get('https://restcountries.com/v3.1/all')
    .then(response => dispatch(fetchCountriesSuccess(response.data)))
    .catch(error => dispatch(fetchCountriesFailure(error.message)));
  // fetch('https://restcountries.com/v3.1/all')
  //   .then(response => response.json())
  //   .then((jsonData:Countries) => dispatch(fetchCountriesSuccess(jsonData)))
  //   .catch((error:Error) => dispatch(fetchCountriesFailure(error.message)));
});