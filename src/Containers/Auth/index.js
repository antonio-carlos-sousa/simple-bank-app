import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { useAuthStateValue } from '../../Store/Provider/auth'

import LoginForm from '../../Components/Forms/login'
import SignupForm from '../../Components/Forms/signup'

const AuthLoginPage = () => {

  let anchorText = 'Já tem conta? Entre aqui!'
  let content = <SignupForm/>

  const [page, setPage] = useState(false)
  const [{ isAuth }, dispatch] = useAuthStateValue()

  const switchForm = e => {
    e.preventDefault()
    setPage(prevState => {
      return !prevState
    })
  }

  if (page) {
    anchorText = 'Novo utilizador? Registe-se aqui!'
    content = <LoginForm dispatchLogin={dispatch}/>
  }

  if (isAuth) {
    content = <Redirect to="/"/>
  }

  return (
    <React.Fragment>
      <div className="hold-transition login-page" style={{ height: '100%' }}>
        <div className="wrapper">
          <div className="login-box">
            <div className="login-logo">
              <b>Home</b> BANK
            </div>
            <div className="login-box-body">
              <p className="login-box-msg">Bem vindo!</p>

              {content}

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
    </React.Fragment>
  )
}

export default AuthLoginPage