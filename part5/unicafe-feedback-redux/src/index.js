import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'

import Title from './title'
import Stats from './stats'
import FeedbackButtons from './feedback-buttons'

class App extends React.Component {

  render() {
    return (
      <div>
        <Title title="Anna palautetta"/>
        <FeedbackButtons
          feedback={store.getState().feedbacks}
          onClick={(attr) => store.dispatch({ type: attr })}
        />
        <Title title="Statistiikka" />
        <Stats feedback={store.getState().feedbacks} />
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
