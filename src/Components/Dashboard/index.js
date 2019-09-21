import React from 'react'

import ValueBox from '../ValueBox'

const Dashboard = () => {
  return (
    <React.Fragment>
      <section className="content-header">
        <h1>Dashboard <small>Version 1.0</small></h1>
      </section>

      <section className="content">

        <ValueBox
          className="bg-green"
          value="2000"
          text="Total Recebido"
          icon="fa fa-bank"/>

        <ValueBox
          className="bg-red"
          value="1000"
          text="Total Gasto"
          icon="fa fa-credit-card"/>

        <ValueBox
          className="bg-blue"
          value="1000"
          text="Total"
          icon="fa fa-money"/>

      </section>
    </React.Fragment>
  )
}

export default Dashboard