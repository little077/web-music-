
import {renderRoutes} from 'react-router-config'
import {HashRouter} from 'react-router-dom'

import React, { memo } from 'react'
import routes from './router'
import { Provider } from 'react-redux';
import store from './store'
import HYAppFooter from 'components/app-footer'
import HYAppHeader from 'components/app-header'

export default memo(function App() {
  return (
    <Provider store={store}>
    <HashRouter>
     <HYAppHeader/>
     {renderRoutes(routes)}
     <HYAppFooter/>
    </HashRouter>
    </Provider>
  )
})
