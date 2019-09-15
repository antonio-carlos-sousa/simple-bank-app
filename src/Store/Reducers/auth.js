import * as actionsTypes from '../Actions/Types'

export default function authReducer (state, action) {
  switch (action.type) {
    case actionsTypes.AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      }
    case actionsTypes.AUTH_FAILED:
      return {
        ...state,
        isAuth: false,
        token: null
      }
    default:
      return state
  }
}