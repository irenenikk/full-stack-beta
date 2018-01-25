import { SET_ALL_BLOGS } from '../actions/blogActions'
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_ALL_BLOGS:
    return action.blogs
  default:
    return state
  }
}
