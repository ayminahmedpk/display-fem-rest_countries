

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE
} from "./countriesActionTypes"


export const fetchCountriesRequest = () => ({ type: FETCH_COUNTRIES_REQUEST });

// Add the right type later on
export const fetchCountriesSuccess = (countriesData: any) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countriesData,
});

export const fetchCountriesFailure = (errorMessage: string) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: errorMessage,
});

// Add the right type later on
// export const fetchCountries = () => ( (dispatch: Dispatch<any>) => {
export const fetchCountries = () => ( (dispatch: any) => {
  dispatch(fetchCountriesRequest());
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(jsonData => dispatch(fetchCountriesSuccess(jsonData)))
    .catch(error => dispatch(fetchCountriesFailure(error.message)));
});