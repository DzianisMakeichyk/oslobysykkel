// tslint:disable
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import bikeApp from './reducers';

let store = createStore(bikeApp, composeWithDevTools(
  applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
