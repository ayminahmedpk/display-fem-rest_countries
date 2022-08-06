import React from 'react';
import './style/App.css';

import { Provider } from 'react-redux';
import store from '../Redux/store';

// import CountryCard from '../Components/CountryCard/CountryCard';
// import CountriesPrototype from '../Redux/features/countries/CountriesPrototype';
import CountriesPanel from '../Components/CountriesPanel/CountriesPanel';

function App() {
  return (
    <>
    <Provider store={store}>
      {/* <CountryCard
        flagURL='https://flagcdn.com/pk.svg'
        name='Pakistan'
        population={220892331}
        region='Asia'
        capital='Islamabad'
      /> */}
      <CountriesPanel/>
    </Provider>
    </>
  );
}

export default App;
