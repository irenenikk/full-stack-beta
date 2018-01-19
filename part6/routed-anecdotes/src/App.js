import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import RouteMenu from './components/RouteMenu'
import ShowRoutes from './components/ShowRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Notification from './components/Notification'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: 1
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: 2
        }
      ],
      notification: ''
    }
  }

  createNotification = (notification) => {
    this.setState({ notification })
    setTimeout(() => {
      this.setState({ notification: '' })
    }, 10000);
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ anecdotes: this.state.anecdotes.concat(anecdote) })
    this.createNotification(`Successfully created ${anecdote.content}`)
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => Number(a.id) === Number(id))

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Software anecdotes</h1>
            <Notification notification={this.state.notification}/>
            <RouteMenu>
              <AnecdoteList name='Anecdotes' path='/anecdotes' anecdotes={this.state.anecdotes} />
              <About name='About' path='/about' />
              <AnecdoteForm name='AnecdoteForm' path='/create_new' addNew={this.addNew} />
            </RouteMenu>
            <ShowRoutes>
              <Anecdote path='/anecdotes/:id' findElement={(id) => this.anecdoteById(id)}/>
            </ShowRoutes>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
