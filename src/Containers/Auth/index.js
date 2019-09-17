import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { openUriBankApi } from '../../Config/settings'
import { useAuthStateValue } from '../../Store/Provider/auth'

import LoginForm from '../../Components/Forms/login'
import SignupForm from '../../Components/Forms/signup'
import Loader from '../../Components/Spinner'

import * as actionsTypes from '../../Store/Actions/Types'

const AuthLoginPage = () => {

  const [page, setPage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [{ isAuth }, dispatch] = useAuthStateValue()

  const switchForm = e => {
    e.preventDefault()
    setPage(prevState => {
      return !prevState
    })
  }

  const submitHandler = ({ name, email, password, passwordConfirm }) => {
    let user = { name, email, password }
    let uri = `${openUriBankApi}/login`

    setLoading(true)

    if (passwordConfirm) {
      user = { ...user, confirm_password: passwordConfirm }
      uri = `${openUriBankApi}/signup`
    }

    axios.post(uri, user).then(
      response => {
        if (response.status === 200) {

          const payload = {
            name: response.data.name,
            email: response.data.email,
            token: response.data.token
          }

          localStorage.setItem('data', JSON.stringify(payload))
          dispatch({ type: actionsTypes.AUTH_SUCCESS, payload })
        }
      }
    ).catch(errors => {
      setLoading(false)
      // TODO: tratamento de erros
      console.log(errors)
    })
  }

  let anchorText = 'Novo utilizador? Registe-se aqui!'
  let authForm = <LoginForm submitHandler={submitHandler}/>

  if (page) {
    anchorText = 'Já tem conta? Entre aqui!'
    authForm = <SignupForm submitHandler={submitHandler}/>
  }

  let content = (
    <div className="hold-transition login-page" style={{ height: '100%' }}>
      <div className="wrapper">
        <div className="login-box">
          <div className="login-logo">
            <b>Home</b> BANK
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Bem vindo!</p>

            {authForm}

            <button
              className="btn-link"
              onClick={e => switchForm(e)}
              style={{ padding: '10px 0 0 0', outline: 'none' }}>
              {anchorText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  if (isAuth) {
    content = <Redirect to="/"/>
  }

  if (loading) {
    content = <Loader/>
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

export default AuthLoginPage