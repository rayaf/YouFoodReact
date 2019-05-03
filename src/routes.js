import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './screens/home';
import Restaurantes from './screens/restaurants'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/restaurants' component={Restaurantes} />
    </Switch>
  </BrowserRouter>
)

export default Routes;