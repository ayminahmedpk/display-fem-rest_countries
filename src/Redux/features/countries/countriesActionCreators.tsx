

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "./countriesConstants"

import { ActionCreator, Dispatch } from "redux";
import { NormalAction, PayloadAction } from "../../commonReduxTypes";
import { Countries } from "./CountriesTypes";
import { CountriesActions } from "./countriesActions";

export const fetchCountriesRequest: ActionCreator<NormalAction> = () => ({
  type: FETCH_COUNTRIES_REQUEST
});

// Add the right type later on
export const fetchCountriesSuccess: ActionCreator<PayloadAction<Countries>> = (
  countriesData) => ({
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countriesData,
});

export const fetchCountriesFailure: ActionCreator<PayloadAction<string>> = (
  errorMessage
) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: errorMessage,
});

// Add the right type later on
// export const fetchCountries = () => ( (dispatch: Dispatch<any>) => {
export const fetchCountries = () => ((dispatch: Dispatch<CountriesActions>) => {
  dispatch(fetchCountriesRequest());
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then((jsonData:Countries) => dispatch(fetchCountriesSuccess(jsonData)))
    .catch((error:Error) => dispatch(fetchCountriesFailure(error.message)));
});