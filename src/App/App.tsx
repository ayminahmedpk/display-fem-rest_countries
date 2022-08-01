import React from 'react';
import './style/App.css';

import { Provider } from 'react-redux';
import store from '../Redux/store';

import CountriesPrototype from '../Redux/features/countries/CountriesPrototype';

function App() {
  return (
    <>
    <Provider store={store}>
      <CountriesPrototype/>
    </Provider>
    </>
  );
}

export default App;
