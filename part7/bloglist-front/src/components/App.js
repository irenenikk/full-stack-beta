import React from 'react'
import { connect } from 'react-redux'
import { getAllBlogs } from '../state/actions/blogActions'
import { loadSession } from '../state/actions/sessionActions'
import LoginForm from './Forms/LoginForm'
import Content from './Content'
import Notification from './Notification'

class App extends React.Component {

  async componentWillMount() {
    this.props.getAllBlogs()
    this.props.loadSession()
  }

  render() {
    return (
      <div>
        { this.props.notification.message && <Notification /> }
        { this.props.user.username === undefined &&
          <div className="login-form">
            <LoginForm />
          </div>
        }
        {
          this.props.user.username !== undefined &&
          <div className="content">
            <Content/>
          </div>
        }
      </div>
    )
  }
}

const mapDispatchToProps = {
  getAllBlogs,
  loadSession
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    user: state.session
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
