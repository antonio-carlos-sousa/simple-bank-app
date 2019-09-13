import React, { useState } from 'react'

//import PropTypes from 'prop-types'

function App () {

  const [state, setState] = useState(false)

  let _class = `skin-blue fixed sidebar-mini`

  const buttonHandler = () => {
    setState(prevState => ({ state: !prevState }))
  }

  if (state) {
    _class = `login-page`
  }

  return (
    <div className={_class} style={{ height: '100%' }}>
      <h1>Bank App</h1>
      <button onClick={() => buttonHandler()}>Click</button>
    </div>
  )
}

export default App
