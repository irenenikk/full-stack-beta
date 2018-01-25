import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../state/actions/sessionActions'

class UserInfo extends React.Component {

  render() {
    return (
      <div className="user-info">
        <div>
          Logged in as {this.props.user.username}
          <button
            className="log-out-button"
            type="button"
            onClick={this.props.logout}
          >
            Log out
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session,
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
