import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Game from './containers/Game';
import reducer from './reducers';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

root.render(
  <Provider store={store}>
      <Game />
  </Provider>,
  document.getElementById('root'),
);
