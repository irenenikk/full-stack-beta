import React from 'react'

export default ({ user }) => {
  return (
    <div className="user">
      <span className="username">{user.name}</span>
      <span className="added-blogs">{` blogs added ${user.blogs.length} `}</span>
    </div>
  )
}
