import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../actions/anecdoteActions'
import { setNotification, clearNotification } from '../actions/notificationActions'

class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.createAnecdote(content)
    this.props.setNotification(`Anecdote ${content} crated successfully`)
    setTimeout(() => {
      this.props.clearNotification()
    }, 5000);

    e.target.anecdote.value = ''
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
  createAnecdote,
  setNotification,
  clearNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
