import anecdoteService from '../services/anecdoteService'
export const CREATE_ANECDOTE = 'CREATE_ANECDOTE'
export const VOTE_ANECDOTE = 'VOTE_ANECDOTE'
export const SET_ALL_ANECDOTES = 'SET_ALL_ANECDOTES'

const getId = () => (100000*Math.random()).toFixed(0)

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew({
        content,
        votes: 0,
        id: getId()
     })
    dispatch({
      type: CREATE_ANECDOTE,
      newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateAnecdote({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: VOTE_ANECDOTE,
      updatedAnecdote
    })
  }
}

export const setAllAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: SET_ALL_ANECDOTES,
      anecdotes,
    })
  }
}

