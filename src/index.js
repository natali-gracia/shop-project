import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux"
import { createStore } from "redux"

import App from './App/App'
import currencySelectReducer from './store/reducers/currencySelectReducer'

const store = createStore(currencySelectReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

