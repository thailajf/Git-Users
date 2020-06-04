import React from 'react';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Store/index';
import Routes from './routes';
import GlobalStyle from './Styles/Global';
import history from './Services/history';
import Header from './Components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
