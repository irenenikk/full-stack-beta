import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../state/actions/sessionActions'

class Login extends React.Component {
  render() {
    return (
      <div >
        <h2>Login</h2>
        <form onSubmit={this.props.login}>
          <div>
            <input
              placeholder='username'
              name='usernameField'
            />
          </div>
          <div>
            <input
              placeholder='password'
              type='password'
              name='passwordField'
            />
          </div>
          <button
            type='submit'
          >
                Log in
          </button>
        </form>
        <div>{'If you\'re lollero96 your password is lollero'}</div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(Login)

