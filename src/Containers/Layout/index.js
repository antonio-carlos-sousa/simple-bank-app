import React from 'react'

import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import Footer from '../../Components/Footer'

const Layout = ({ children }) => {

  return (
    <div className="skin-blue fixed sidebar-mini">
      <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper" style={{minHeight: '890px'}}>
          {children}
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout