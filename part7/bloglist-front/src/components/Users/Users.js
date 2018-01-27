import React from 'react'
import ModestUser from './ModestUser'

export default ({ users }) => {
  return (
    <div className="list" >
      <h2>Users</h2>
      {
        users
          .sort((u1, u2) => u1.name.localeCompare(u2.name))
          .map(user => {
            return (
              <div
                key={user._id}
                className="list-item"
              >
                <ModestUser user={user}/>
              </div>
            )})
      }
    </div>
  )
}

