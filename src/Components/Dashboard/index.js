import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { authUriBankApi } from '../../Config/settings'
import { useAuthStateValue } from '../../Store/Provider/auth'

import ValueBox from '../ValueBox'
import Spinner from '../Spinner'

const Dashboard = () => {

  const [state, setState] = useState({ credit: 0, debt: 0, total: 0 })
  const [loading, setLoading] = useState(true)
  const { token } = useAuthStateValue()[0]

  useEffect(() => {

    axios.get(
      `${authUriBankApi}/billingSummary`,
      { headers: { 'Authorization': token } })
      .then(response => {
        setLoading(false)
        if (response.status === 200) {
          setState({
            credit: response.data.credit,
            debt: response.data.debt,
            total: response.data.credit - response.data.debt
          })
        }
      })
      .catch(error => {
        setLoading(false)
        console.log(error.response)
      })

  }, [token])

  let content = (
    <>
      <section className="content-header">
        <h1>Dashboard <small>Version 1.0</small></h1>
      </section>

      <section className="content">

        <ValueBox
          className="bg-green"
          value={state.credit}
          text="Total Recebido"
          icon="fa fa-bank"/>

        <ValueBox
          className="bg-red"
          value={state.debt}
          text="Total Gasto"
          icon="fa fa-credit-card"/>

        <ValueBox
          className="bg-blue"
          value={state.total}
          text="Total"
          icon="fa fa-money"/>

      </section>
    </>
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

export default Dashboard