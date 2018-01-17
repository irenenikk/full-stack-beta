import { CHANGE_FILTER, CLEAR_FILTER } from '../actions/filterActions'
import { VOTE_ANECDOTE, CREATE_ANECDOTE, SET_ALL_ANECDOTES } from '../actions/anecdoteActions'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000*Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdotes = anecdotesAtStart.map(asObject)

const initialState = {
  anecdotes: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_ANECDOTES:
      return {
        ...state,
        anecdotes: action.anecdotes
      }
    case VOTE_ANECDOTE:
      const old = state.anecdotes.filter(a => a.id !==action.id)
      const voted = state.anecdotes.find(a => a.id === action.id)
      return {
        ...state,
        anecdotes: [...old, { ...voted, votes: voted.votes+1} ]
      }
    case CREATE_ANECDOTE:
      return {
        ...state,
        anecdotes:[...state.anecdotes, { content: action.content, id: getId(), votes: 0 }],
      }
    }
  return state
}
