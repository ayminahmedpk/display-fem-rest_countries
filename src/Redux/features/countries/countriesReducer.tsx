

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  COUNTRIES_SELECT_REGION,
} from './countriesConstants'

import { Reducer } from 'redux';
import { CountriesActions, CountriesLocalActions } from './countriesActions';
import { Countries } from './CountriesTypes';


export type countriesState = {
  loading   : boolean;
  countries : any;
  error     : string;
  selection : string;
};


export type actionType = {
  type: string;
  payload: any;
}


const initialState : countriesState = {
  loading   : false,
  countries : null,
  error     : '',
  selection : 'all',
};


const countriesReducer : Reducer<countriesState, CountriesActions | CountriesLocalActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST :
      return {
        ...state,
        countries: null,
        loading: true,
      }
    
    case FETCH_COUNTRIES_SUCCESS :
      if('payload' in action) {
        return {
          ...state,
          loading   : false,
          error     : '',
          countries : action.payload as Countries,
        }
      }
    break;
    
    case FETCH_COUNTRIES_FAILURE :
      if('payload' in action) {
        return {
          ...state,
          loading : false,
          error   : action.payload as string,
        }
      }
    break;

    case COUNTRIES_SELECT_REGION :
      if('payload' in action) {
        return {
          ...state,
          selection   : action.payload as string,
        }
      }
    break;
      
    default:
      return state;
  }
  // Convincing TS we will always return state - type. Hacky?
  return state;
 }


 export default countriesReducer;