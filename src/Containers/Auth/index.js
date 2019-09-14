import React from 'react'

import SignupForm from '../../Components/Forms/signup'

const AuthLoginPage = () => {

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
              <SignupForm/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AuthLoginPage