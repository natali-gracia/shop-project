import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux"
import { createStore } from "redux"
import ScrollToTop from './Components/ScrollToTop'

import App from './App/App'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

