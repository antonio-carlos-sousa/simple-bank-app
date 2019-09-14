import React from 'react'

export default function Input (props) {

  const { isTouched } = props

  let className = 'form-group has-feedback'
  let errorLabel = null

  if (isTouched) {
    className = 'form-group has-success'
  }

  if (props.error && isTouched) {
    className = 'form-group has-error'
    errorLabel = <span className="help-block">{props.error}</span>
  }

  return (
    <div className={className}>
      <input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.handleBlur}
        value={props.value}
        required={props.isRequired}
        className="form-control"
      />
      {errorLabel}
    </div>
  )
};