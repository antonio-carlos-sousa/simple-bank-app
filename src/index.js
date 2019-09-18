import React from 'react'
import ReactDOM from 'react-dom'
import './Assets/Styles/index.css'
import Index from './Containers'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Store/Provider/auth'

import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'

/**
 * admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
      "node_modules/admin-lte/bootstrap/js/bootstrap.min.js",
      "node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js",
      "node_modules/admin-lte/dist/js/app.min.js"
 */

const app = (
  <BrowserRouter>
    <AuthProvider>
      <Index/>
    </AuthProvider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
