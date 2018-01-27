import React from 'react'
import { Link } from 'react-router-dom'

export default ({ user }) => {
  return (
    <div className="modest-user" >
      <Link to={`/users/${user._id}`}>
        <div>{user.username}</div>
      </Link>
      <div className="added-blogs">{user.blogs.length} blogs</div>
    </div>
  )
}
