import React from 'react';
import './style/App.css';

import { Provider } from 'react-redux';
import store from '../Redux/store';

import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// import CountryCard from '../Components/CountryCard/CountryCard';
// import CountriesPrototype from '../Redux/features/countries/CountriesPrototype';
// import CountriesPanel from '../Components/CountriesPanel/CountriesPanel';
import SPA from '../Pages/SPA/SPA';

function App() {
  return (
    <>
    <Router>
      <Provider store={store}>
        {/* <CountryCard
          flagURL='https://flagcdn.com/pk.svg'
          name='Pakistan'
          population={220892331}
          region='Asia'
          capital='Islamabad'
        /> */}
        {/* <CountriesPanel/> */}
        <SPA></SPA>
      </Provider>
    </Router>
    </>
  );
}

export default App;
