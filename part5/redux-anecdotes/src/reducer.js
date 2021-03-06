const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = {
  anecdotes: anecdotesAtStart.map(asObject),
  newAnecdote: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const anecdotes = state.anecdotes.map(o => {
        if (o.content === action.anecdote) {
          return { ...o, votes: o.votes + 1 }
        }
        return o
      })
      return { ...state, anecdotes }
    case 'CHANGE_NEW_ANECDOTE':
      return { ...state, newAnecdote: action.input }
    case 'CREATE_NEW_ANECDOTE':
      const anecdote = asObject(state.newAnecdote)
      return {...state,
              anecdotes: [ ...state.anecdotes, anecdote ],
              newAnecdote: ''
            }
    default:
      break;
  }
  return state
}

export default reducer
