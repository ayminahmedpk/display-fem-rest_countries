import React from 'react';

import '../style/style.css';

import { Provider } from 'react-redux';
import store from '../Redux/store';

import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

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