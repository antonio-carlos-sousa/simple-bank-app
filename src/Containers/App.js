import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router'

import AuthLoginPage from './Auth'

//import PropTypes from 'prop-types'

function App () {

  let availableRoutes = (
    <Switch>
      <Route path="/signup" component={AuthLoginPage} exact/>
      <Redirect to="/signup"/>
    </Switch>
  )

  // change for props.isAuthenticated
  if (false) {
    availableRoutes = (
      <Switch>
        <Route path="/payments" exact/>
        <Route path="/" exact/>
        <Redirect to="/"/>
      </Switch>
    )
  }

  return (
    <React.Fragment>

      {availableRoutes}

    </React.Fragment>
  )
}

export default App
