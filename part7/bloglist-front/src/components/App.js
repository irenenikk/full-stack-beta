import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import LoginForm from './Forms/LoginForm'
import Content from './Content'
import Notification from './Notification'

class App extends React.Component {

  render() {
    if (this.props.user.username === undefined) {
      return (
        <div>
          { this.props.notification.message && <Notification /> }
          <div className="login-form">
            <LoginForm />
          </div>
        </div>
      )
    }
    return (
      <Router>
        <div>
          {
            this.props.user.username !== undefined &&
          <div className="content">
            <Content/>
          </div>
          }
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    user: state.session
  }
}

export default connect(mapStateToProps, null)(App)
