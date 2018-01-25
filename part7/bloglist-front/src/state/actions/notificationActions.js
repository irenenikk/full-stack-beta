export const NEW_NOTIFICATION = 'NEW_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'

export const newNotification = (notification) => {
  return {
    type: NEW_NOTIFICATION,
    notification,
  }
}

export const clearNotification = () => {
  return {
    type: CLEAR_NOTIFICATION,
  }
}

export const createNotification = (notification) => {
  return async (dispatch) => {
    dispatch(newNotification(notification))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }
}

export const handleError = (e) => {
  return async (dispatch) => {
    if (e.response) {
      return dispatch(newNotification({ message: e.response.data, error: true }))
    }
    if (e instanceof String) {
      return dispatch(newNotification({ message: e, error: true }))
    }
    dispatch(newNotification({ message: 'Something went wrong', error: true }))
  }
}
