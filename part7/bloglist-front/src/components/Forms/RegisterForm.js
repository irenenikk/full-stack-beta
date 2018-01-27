import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../state/actions/userActions'

class Login extends React.Component {
  render() {
    return (
      <div >
        <form onSubmit={this.props.register}>
          <div>
            <input
              placeholder='username'
              name='username'
            />
          </div>
          <div>
            <input
              placeholder='password'
              type='password'
              name='password'
            />
          </div>
          <div>
            <input
              placeholder='repeat password'
              type='password'
              name='password_confirmation'
            />
          </div>
          <button
            type='submit'
          >
                Register
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  register
}

export default connect(null, mapDispatchToProps)(Login)
