import React from 'react'
import Blog from './Blog'

export default ({ blogs, onLike }) => {
  return (
    <div className="blogs">
      <h2>Blogs</h2>
      {
        blogs
          .sort((b1, b2) => b2.likes - b1.likes)
          .map(blog =>
        <Blog key={blog._id} blog={blog} onLike={onLike}/>
        )
      }
    </div>
  )
}
