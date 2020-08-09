import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './sass/index.scss';

import App from './App';

const app = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

render(app, document.getElementById('root'));
