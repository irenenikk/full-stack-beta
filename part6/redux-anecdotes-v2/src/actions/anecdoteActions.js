export const CREATE_ANECDOTE = 'CREATE_ANECDOTE'
export const VOTE_ANECDOTE = 'VOTE_ANECDOTE'

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

