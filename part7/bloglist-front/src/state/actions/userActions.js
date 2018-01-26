import userService from '../../services/users'
import { handleError } from '../actions/notificationActions'

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
