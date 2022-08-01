

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from './countriesActionTypes'


export type countriesState = {
  loading   : boolean,
  countries : any,
  error     : string | null,
};


export type actionType = {
  type: string,
  payload: any,
}


const initialState : countriesState = {
  loading   : false,
  countries : null,
  error     : null,
};


type countriesReducerType = (
  state  : countriesState,
  action : actionType
) => countriesState;

const countriesReducer : countriesReducerType = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST :
      return {
        ...state,
        loading: true,
      }
    
    case FETCH_COUNTRIES_SUCCESS :
      return {
        ...state,
        loading   : false,
        error     : null,
        countries : action.payload,
      }
    
    case FETCH_COUNTRIES_FAILURE :
      return {
        ...state,
        loading : false,
        error   : action.payload,
      }
      
    default:
      return state;
  }
 }


 export default countriesReducer;