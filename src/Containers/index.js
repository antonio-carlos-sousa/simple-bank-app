import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'

import { useAuthStateValue } from '../Store/Provider/auth'
import AuthLoginPage from './Auth'
import * as actionsTypes from '../Store/Actions/Types'

import Layout from './Layout';
import Dashboard from '../Components/Dashboard'

//import PropTypes from 'prop-types'

function Index() {

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

  let content = (
    <Switch>
      <Route path="/signup" component={AuthLoginPage} exact />
      <Redirect to="/signup" />
    </Switch>
  )

  // change for props.isAuthenticated
  if (isAuth) {
    content = (
      <Layout>
        <Switch>
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/" component={Dashboard} exact />
          <Redirect to="/" />
        </Switch>
      </Layout>
    )
  }

  return (
    <React.Fragment>

      {content}

    </React.Fragment>
  )
}

export default Index
