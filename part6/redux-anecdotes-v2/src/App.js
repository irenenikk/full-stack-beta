import React from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { setAllAnecdotes } from './actions/anecdoteActions'

class App extends React.Component {

  componentWillMount = async () => {
    try {
      this.props.setAllAnecdotes()
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Filter />
        <Notification />
        <AnecdoteList  />
        <AnecdoteForm  />
      </div>
    )
  }
}

const mapDispatchToProps = {
  setAllAnecdotes
}

export default connect(null, mapDispatchToProps)(App)
