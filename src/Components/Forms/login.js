import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Input from './Input'
import * as actionsTypes from '../../Store/Actions/Types'

const loginForm = ({ dispatchLogin }) => {

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    console.log(setSubmitting)

    /** login request */
    let token = 'ABC123'
    localStorage.setItem('token', token)

    dispatchLogin({ type: actionsTypes.AUTH_SUCCESS, payload: { token } })
  }

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is Required')
  })

  return (
    <React.Fragment>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting })}>

        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

          <form onSubmit={handleSubmit}>

            <Input
              placeholder="Email"
              type="email"
              name="email"
              error={errors.email}
              isTouched={touched.email}
              isRequired={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}/>

            <Input
              placeholder="Password"
              type="password"
              name="password"
              error={errors.password}
              isTouched={touched.password}
              isRequired={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}/>

            <div className="row">
              <div className="col-sm-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat">
                  Entrar
                </button>
              </div>
            </div>

          </form>
        )}

      </Formik>
    </React.Fragment>
  )
}

export default loginForm