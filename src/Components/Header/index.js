import React from 'react'

import Navbar from './Navbar'

export default function Header () {
  return (
    <header className="main-header">
      <div className="logo">
        <span className="logo-lg">
          <i className="fa fa-leaf"/>
          <b> First</b>APP
        </span>
      </div>
      <Navbar/>
    </header>
  )
}