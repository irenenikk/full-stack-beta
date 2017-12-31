import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Title from './title'
import Stats from './stats'
import FeedbackButtons from './feedback-buttons'

class App extends React.Component {

  constructor(props) {
    const feedback = [
      { attribute: "hyvä", counter: 0},
      { attribute: "kohtalainen", counter: 0 }
    ]
    super(props)
    this.state = { feedback: feedback }
  }


  giveFeedback = (attr) => {
    this.setState({
      feedback: this.state.feedback.map(f => {
        if (f.attribute === attr) {
          return { ...f, counter: f.counter+1}
        }
        return f
      })
    })
  }

  render() {
    return (
      <div>
        <Title title="Anna palautetta"/>
        <FeedbackButtons
          feedback={this.state.feedback}
          onClick={this.giveFeedback}
        />
        <Title title="Statistiikka" />
        <Stats feedback={this.state.feedback} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
