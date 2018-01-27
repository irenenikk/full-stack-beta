import React from 'react'
import { Link } from 'react-router-dom'
import ModestUser from './ModestUser'

export default ({ users }) => {
  return (
    <div className="users" >
      <h2>Users</h2>
      {
        users
          .sort((u1, u2) => u1.name.localeCompare(u2.name))
          .map(user => <Link key={user._id} to={`/users/${user._id}`}><ModestUser user={user}/></Link>)
      }
    </div>
  )
}

