import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote, setAllAnecdotes } from '../actions/anecdoteActions'
import { setNotification, clearNotification } from '../actions/notificationActions'
import anecdoteService from '../services/anecdoteService'

class AnecdoteList extends React.Component {

  componentDidMount = async () => {
    try {
      const anecdotes = await anecdoteService.getAll()
      this.props.setAllAnecdotes(anecdotes)
    } catch (e) {
      console.log(e)
    }
  }

  handleVote = async (anecdote) => {
    try {
      const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
      const updatedAnecdote = await anecdoteService.updateAnecdote(newAnecdote)
      this.props.voteAnecdote(anecdote)
      this.props.setNotification(`You voted ${anecdote.content}`)
      setTimeout(() => {
        this.props.clearNotification()
      }, 5000);
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.anecdotes
          .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={(e) => {
                e.preventDefault()
                this.handleVote(anecdote)
              }}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const visibleAnecdotes = (anecdotes, filter) => {
  return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    anecdotes: visibleAnecdotes(state.anecdotes.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  clearNotification,
  setAllAnecdotes
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
