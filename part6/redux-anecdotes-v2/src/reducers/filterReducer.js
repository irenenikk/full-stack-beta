import { CHANGE_FILTER, CLEAR_FILTER } from '../actions/filterActions'
import { CREATE_ANECDOTE } from '../actions/anecdoteActions'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
        return action.filter
    case CLEAR_FILTER:
        return ''
    case CREATE_ANECDOTE:
        return ''
  }
  return state
}
