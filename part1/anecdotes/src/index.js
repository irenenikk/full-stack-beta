import React from 'react'
import ReactDOM from 'react-dom'

import Button from './button'
import Stats from './stats'

class App extends React.Component {
  constructor(props) {
    super(props)
    const votedAnecdotes = this.props.anecdotes.map(a => {
      return { anecdote: a, vote: 0 }
    })
    this.state = {
      selected: 0,
      current: 0,
      anecdotes: votedAnecdotes
    }
  }

  nextRandom = () => {
    const rand = Math.floor((Math.random() * anecdotes.length));
    this.setState({ selected: rand, current: rand })
  }

  voteAnecdote = (index) => {
    const newAnecdotes = this.state.anecdotes.map((a, i) => {
      if (i === index) {
        return {...a, vote: a.vote + 1}
      }
      return a
    })
    this.setState({
      anecdotes: newAnecdotes
    })
  }

  render() {
    return (
      <div>
        {this.state.anecdotes[this.state.selected].anecdote}
      <br/>
      <Button
        text="Vote up"
        onClick={() => this.voteAnecdote(this.state.current)}/>
      <Button
        text="Next anecdote"
        onClick={this.nextRandom}/>
      <Stats anecdotes={this.state.anecdotes}/>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
