import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux"
import ScrollToTop from './Components/ScrollToTop'

import App from './App/App'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

