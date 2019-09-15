import React, { createContext, useReducer, useContext } from 'react'

import authReducer from '../Reducers/auth'

const initialState = {
  token: null,
  expired: false,
  isAuth: false,
  name: null,
  email: null,
  loading: false
}

export const AuthContext = createContext(initialState)

export default function AuthProvider ({ children }) {
  return (
    <AuthContext.Provider value={useReducer(authReducer, initialState)}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthStateValue = () => useContext(AuthContext)