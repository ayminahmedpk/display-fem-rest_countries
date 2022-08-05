import {
  combineReducers,
  createStore,  // deprecated
  legacy_createStore,
} from "redux"

import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import countriesReducer from "./features/countries/countriesReducer"
import { CountriesActions } from "./features/countries/countriesActions";

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
)));

export type ActionsType = CountriesActions;
export type StateType   = ReturnType<typeof rootReducer>

// console.log(store.getState());

export default store;