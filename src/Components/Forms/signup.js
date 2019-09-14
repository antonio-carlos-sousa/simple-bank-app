import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Input from './Input'

const signupForm = () => {

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    console.log(setSubmitting)
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is Required'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null]).required('Password Confirm is required')
  })

  return (
    <React.Fragment>
      <Formik
        initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting })}>

        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

          <form onSubmit={handleSubmit}>

            <Input
              placeholder="Nome"
              type="input"
              name="name"
              error={errors.name}
              isTouched={touched.name}
              isRequired={false}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}/>

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