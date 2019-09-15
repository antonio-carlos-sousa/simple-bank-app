import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'

import { useAuthStateValue } from '../Store/Provider/auth'
import AuthLoginPage from './Auth'
import * as actionsTypes from '../Store/Actions/Types'

//import PropTypes from 'prop-types'

function Index () {

  const [{ isAuth }, dispatch] = useAuthStateValue()

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem('data'))

    if (data) {
      dispatch({
        type: actionsTypes.AUTH_SUCCESS,
        payload: {
          name: data.name,
          email: data.email,
          token: data.token
        }
      })
    }

  }, [dispatch])

  let availableRoutes = (
    <Switch>
      <Route path="/signup" component={AuthLoginPage} exact/>
      <Redirect to="/signup"/>
    </Switch>
  )

  // change for props.isAuthenticated
  if (isAuth) {
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

export default Index
