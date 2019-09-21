import React, { useState } from 'react'
import axios from 'axios'

import { useAuthStateValue } from '../../Store/Provider/auth'

import Spinner from '../Spinner'

const Payments = () => {

  const [loading, setLoading] = useState(true)

  let content = (
    <section className="content">
      <div className="nav-tabs-custom">
        <ul className="nav nav-tabs">
          <li>
            <a href data-target="#tabList" data-toggle="tab">
              <i className="fa fa-bars"/> Lista
            </a>
          </li>
          <li>
            <a href data-target="#tabCreate" data-toggle="tab">
              <i className="fa fa-plus"/> Criar
            </a>
          </li>
        </ul>
      </div>
    </section>
  )

  if (loading) {
    content = <Spinner style={{ marginTop: '20%' }}/>
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

export default Payments