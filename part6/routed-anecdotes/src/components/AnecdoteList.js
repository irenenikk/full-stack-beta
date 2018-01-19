import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ListGroup>
      {
          anecdotes.map(anecdote => {
            return (
              <ListGroupItem key={anecdote.id} ><Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link></ListGroupItem>
            )
          })
        }
      </ListGroup>
    </div>
  )
}
