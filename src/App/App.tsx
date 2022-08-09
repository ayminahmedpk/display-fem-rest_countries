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

class App extends React.Component {

  render() {
    return (
      <>
      <Router>
        <Provider store={store}>
          <SPA/>
        </Provider>
      </Router>
      </>
    )
  }

}


export default App;