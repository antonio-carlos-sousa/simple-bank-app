/** not used for now */
import * as actionsTypes from './Types'

export const checkAuth = () => {
  return dispatch => {
    // do something
    console.log('checking')
    dispatch({ type: actionsTypes.CHECK_AUTH })
  }
}

export const login = () => {
  return dispatch => {
    // do something
    console.log('login')
    dispatch({ type: actionsTypes.LOGIN })
  }
}