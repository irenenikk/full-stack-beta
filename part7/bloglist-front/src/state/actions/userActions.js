import userService from '../../services/users'
import { handleError, createNotification } from '../actions/notificationActions'

export const SET_ALL_USERS = 'SET_ALL_USERS'

export const setAllUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    users,
  }
}

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const users = await userService.getAll()
      dispatch(setAllUsers(users))
    } catch (e) {
      dispatch(handleError('Could not get all users'))
    }
  }
}

export const register = (e) => {
  e.preventDefault()
  return async (dispatch) => {
    const password = e.target.password.value
    const password_confirmation = e.target.password_confirmation.value
    if (password !== password_confirmation) {
      return dispatch(createNotification({ message: 'Password confirmation did not match', error: true }))
    }
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    try {
      await userService.createNew(user)
      return dispatch(createNotification({ message: 'You can now log in' }))
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}
