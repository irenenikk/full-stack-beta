import React from 'react'
import { connect } from 'react-redux'
import { setAllAnecdotes, createAnecdote } from '../actions/anecdoteActions'
import { notify } from '../actions/notificationActions'
import anecdoteService from '../services/anecdoteService'
import { asObject } from '../reducers/anecdoteReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const newAnecdote = asObject(content)
    try {
      this.props.createAnecdote(content)
      this.props.notify(`Anecdote ${content} crated successfully`, 5)
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
  notify,
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
