import * as actionsTypes from '../Actions/Types'

export default function authReducer (state, action) {
  switch (action.type) {
    case actionsTypes.AUTH_SUCCESS:
      return {
        ...state,
        isAuth: action.payload.token !== null,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        loading: false
      }
    case actionsTypes.AUTH_FAILED:
      return {
        ...state,
        isAuth: false,
        name: null,
        email: null,
        token: null,
        loading: false
      }
    default:
      return state
  }
}