import {
  combineReducers,
  createStore,
} from "redux"

import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import countriesReducer from "./features/countries/countriesReducer"

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
)));

// console.log(store.getState());

export default store;