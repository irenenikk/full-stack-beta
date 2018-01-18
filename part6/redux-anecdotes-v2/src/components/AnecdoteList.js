import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote, setAllAnecdotes } from '../actions/anecdoteActions'
import { notify } from '../actions/notificationActions'
import anecdoteService from '../services/anecdoteService'

class AnecdoteList extends React.Component {

  handleVote = async (anecdote) => {
    try {
      this.props.voteAnecdote(anecdote)
      this.props.notify(`You voted ${anecdote.content}`, 5)
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
  notify,
  setAllAnecdotes
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
