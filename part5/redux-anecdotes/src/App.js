import React from 'react';


class App extends React.Component {
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes
          .sort((a1, a2) => a2.votes - a1.votes)
          .map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => this.props.store.dispatch({ type: 'VOTE', anecdote: anecdote.content })}
              >vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div>
            <input
              value={this.props.store.getState().newAnecdote}
              onChange={(e) => this.props.store.dispatch({ type: 'CHANGE_NEW_ANECDOTE', input: e.target.value })}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              this.props.store.dispatch({ type: 'CREATE_NEW_ANECDOTE' })
            }}
          >
            create
          </button>
        </form>
      </div>
    )
  }
}

export default App
