import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { getAllBlogs } from '../state/actions/blogActions'
import { getAllUsers } from '../state/actions/userActions'
import { loadSession } from '../state/actions/sessionActions'
import LoginForm from './Forms/LoginForm'
import Content from './Content'
import Notification from './Notification'

class App extends React.Component {

  async componentWillMount() {
    this.props.getAllBlogs()
    this.props.getAllUsers()
    this.props.loadSession()
  }

  render() {
    if (this.props.user.username === undefined) {
      return (
        <div className="login-form">
          <LoginForm />
        </div>
      )
    }
    return (
      <Router>
        <div>
          { this.props.notification.message && <Notification /> }
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

const mapDispatchToProps = {
  getAllBlogs,
  loadSession,
  getAllUsers
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    user: state.session
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
