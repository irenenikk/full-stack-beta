import { NEW_SESSION, END_SESSION } from '../actions/sessionActions'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
  case NEW_SESSION:
    return action.user
  case END_SESSION:
    return {}
  default:
    return state
  }
}
