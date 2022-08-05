

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  COUNTRIES_SELECT_REGION
} from "./countriesConstants"

import { ActionCreator, Dispatch } from "redux";
import { NormalAction, PayloadAction } from "../../commonReduxTypes";
import { Countries } from "./CountriesTypes";
import { CountriesActions, CountriesLocalActions, SelectRegionAction } from "./countriesActions";
import { StateType } from "../../store";
import React from "react";

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
export const fetchCountries = () => ((
  dispatch: Dispatch<CountriesActions>,
  getState: () => StateType,
) => {
  dispatch(fetchCountriesRequest());
  const apiLink = generateApi(getState().countries.selection);
  fetch(apiLink)
    .then(response => response.json())
    .then((jsonData:Countries) => dispatch(fetchCountriesSuccess(jsonData)))
    .catch((error:Error) => dispatch(fetchCountriesFailure(error.message)));
});

const generateApi: (selection: string) => string = (selection) => {
  if(selection == 'all') {
    return 'https://restcountries.com/v3.1/all'
  }
  else {
    return `https://restcountries.com/v3.1/region/${selection}`
  }
}

export const selectRegion: (event: React.ChangeEvent<HTMLSelectElement>) => SelectRegionAction = (event) => ({
  type: COUNTRIES_SELECT_REGION,
  payload: event.target.value ,
})