export const CREATE_ANECDOTE = 'CREATE_ANECDOTE'
export const VOTE_ANECDOTE = 'VOTE_ANECDOTE'
export const SET_ALL_ANECDOTES = 'SET_ALL_ANECDOTES'

export const createAnecdote = (content) => {
  return {
    type: CREATE_ANECDOTE,
    content
  }
}

export const voteAnecdote = (anecdote) => {
  return {
    type: VOTE_ANECDOTE,
    id: anecdote.id
  }
}

export const setAllAnecdotes = (anecdotes) => {
  return {
    type: SET_ALL_ANECDOTES,
    anecdotes
  }
}

