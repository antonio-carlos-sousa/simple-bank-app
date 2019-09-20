import React from 'react'

const ValueBox = ({ className, value, text, icon }) => {

  let _className = `small-box ${className}`

  return (
    <div className="col-xs-12 col-md-12 col-lg-4">
      <div className={_className}>
        <div className="inner">
          <h3>{value} €</h3>
          <p>{text}</p>
        </div>
        <div className='icon'>
          <i className={icon}/>
        </div>
      </div>
    </div>
  )
}

export default ValueBox