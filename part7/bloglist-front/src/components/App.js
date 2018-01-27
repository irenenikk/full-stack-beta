import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import LoginForm from './Forms/LoginForm'
import RegisterForm from './Forms/RegisterForm'
import Content from './Content'
import Notification from './Notification'
import Togglable from './Togglable'

class App extends React.Component {

  render() {
    if (this.props.user.username === undefined) {
      return (
        <div>
          { this.props.notification.message && <Notification /> }
          <div className="login-form">
            <LoginForm />
          </div>
          <div className="home-prompt" >Or</div>
          <Togglable buttonLabel="Register">
            <RegisterForm />
          </Togglable>
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
