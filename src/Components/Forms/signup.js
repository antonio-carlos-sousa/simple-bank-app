import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { openUriBankApi } from '../../Config/appSettings'
import Input from './Input'

const signupForm = () => {

  const handleSubmit = ({ name, email, password }) => {
    const user = { nome: name, email, password }

    axios.post(openUriBankApi, user).then(
      response => {
        console.log(response)
      }
    ).catch(errors => console.log(errors))
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!]).{6,12})/,
        'Password deve conter: letra maiúscula, letra minúscula, número e caracter especial')
      .required('Password is Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords don\'t match')
      .required('Confirm Password is required')
  })

  return (
    <React.Fragment>
      <Formik
        initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values)}>

        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

          <form onSubmit={handleSubmit}>

            <Input
              placeholder="Nome"
              type="text"
              name="name"
              error={errors.name}
              isTouched={touched.name}
              isRequired={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}/>

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

            <Input
              placeholder="Confirm Password"
              type="password"
              name="passwordConfirm"
              error={errors.passwordConfirm}
              isTouched={touched.passwordConfirm}
              isRequired={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirm}/>

            <div className="row">
              <div className="col-sm-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat">
                  Registar
                </button>
              </div>
            </div>

          </form>
        )}

      </Formik>
    </React.Fragment>
  )
}

export default signupForm