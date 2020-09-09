import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux"
import ScrollToTop from './Components/ScrollToTop'
import store from './store/store'
import Loader from './Components/loading/Loader'

const App = lazy(() => import('./App/App'))


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <Suspense fallback={<Loader/>}>
          <App/>
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)

