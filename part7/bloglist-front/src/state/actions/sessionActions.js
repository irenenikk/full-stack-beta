import loginService from '../../services/login'
import { createNotification, handleError } from './notificationActions'
export const END_SESSION = 'END_SESSION'
export const NEW_SESSION = 'NEW_SESSION'

const localStorageKey = 'user'

const newSession = (response) => {
  return {
    type: NEW_SESSION,
    user: response,
  }
}

const endSession = () => {
  return {
    type: END_SESSION
  }
}

export const login = (e) => {
  e.preventDefault()
  return async (dispatch) => {
    try {
      const response = await loginService.login({
        username: e.target.usernameField.value,
        password: e.target.passwordField.value
      })
      if (!response.token) {
        return dispatch(createNotification({ message: 'Invalid username or password', error: true }))
      }
      dispatch(newSession(response))
      window.localStorage.setItem(localStorageKey, JSON.stringify(response))
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}

export const logout = (e) => {
  e.preventDefault()
  return async (dispatch) => {
    window.localStorage.removeItem(localStorageKey)
    dispatch(endSession())
  }
}

export const loadSession = () => {
  return async (dispatch) => {
    const storedUser = window.localStorage.getItem(localStorageKey)
    if (storedUser) {
      const user = JSON.parse(storedUser)
      dispatch(newSession(user))
    }
  }
}
