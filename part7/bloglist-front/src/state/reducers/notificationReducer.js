import { NEW_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions/notificationActions'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
  case NEW_NOTIFICATION:
    return action.notification
  case CLEAR_NOTIFICATION:
    return {}
  default:
    return state
  }
}
