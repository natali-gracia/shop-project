import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from './App/App';
import currencySelectReducer from './store/currencySelectReducer'

const store = createStore(currencySelectReducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);

