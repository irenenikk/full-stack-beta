import React from 'react'
import { connect } from 'react-redux'
import { setAllAnecdotes, createAnecdote } from '../actions/anecdoteActions'
import { setNotification, clearNotification } from '../actions/notificationActions'
import anecdoteService from '../services/anecdoteService'
import { asObject } from '../reducers/anecdoteReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const newAnecdote = asObject(content)
    try {
      const anecdote = await anecdoteService.createNew(newAnecdote)
      this.props.createAnecdote(content)
      this.props.setNotification(`Anecdote ${content} crated successfully`)
      setTimeout(() => {
        this.props.clearNotification()
      }, 5000);
      e.target.anecdote.value = ''
    } catch (e) {
      console.log(e)
    }

  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
     )
   }
}

const mapDispatchToProps = {
  setAllAnecdotes,
  createAnecdote,
  setNotification,
  clearNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
