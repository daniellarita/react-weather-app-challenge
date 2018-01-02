// Module
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import LandingPage from './components/Landing-Page/LandingPage'
import AddCityContainer from './components/AddCity/AddCityContainer'

// File
import App from 'components/App/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/add-city" component={AddCityContainer} />
  </Route>
)
