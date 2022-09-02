

import { Reducer } from 'redux';
import { CountriesActions } from './countriesActions';
import { Countries } from './CountriesTypes';


export type countriesState = {
  loading   : boolean;
  countries : Countries | null;
  error     : string;
};


const initialState : countriesState = {
  loading   : false,
  countries : null,
  error     : '',
};


const countriesReducer : Reducer<countriesState, CountriesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES_REQUEST' :
      return {
        ...state,
        countries : null,
        loading   : true,
        error     : '',
      }
    
    case 'FETCH_COUNTRIES_SUCCESS' :
      return {
        ...state,
        loading   : false,
        error     : '',
        countries : action.payload as Countries,
      }
    
    case 'FETCH_COUNTRIES_FAILURE' :
      return {
        ...state,
        loading : false,
        error   : action.payload as string,
      }
      
    default:
      return state;
  }
}


 export default countriesReducer;