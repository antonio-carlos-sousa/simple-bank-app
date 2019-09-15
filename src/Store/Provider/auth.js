import React, { createContext, useReducer, useContext } from 'react'

import authReducer from '../Reducers/auth'

const initialState = {
  isAuth: false,
  token: null,
  expired: false
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