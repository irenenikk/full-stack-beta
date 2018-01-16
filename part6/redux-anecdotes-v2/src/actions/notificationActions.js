export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'

export const setNotification = (notification) => {
  return {
    type: SET_NOTIFICATION,
    message: notification,
  }
}

export const clearNotification = () => {
  return {
    type: CLEAR_NOTIFICATION,
  }
}
