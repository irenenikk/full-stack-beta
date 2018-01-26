import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../../state/actions/userActions'
import ModestUser from './ModestUser'
import { withRouter } from 'react-router-dom'

class Users extends React.Component {
  render() {
    return (
      <div className="users" >
        <h2>Users</h2>
        {
          this.props.users
            .sort((u1, u2) => u1.name.localeCompare(u2.name))
            .map(user => <Link key={user._id} to={`/users/${user._id}`}><ModestUser user={user}/></Link>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = {
  getAllUsers
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users))

