import React from 'react'

export default ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
      </ul>
    </div>
  )
}
