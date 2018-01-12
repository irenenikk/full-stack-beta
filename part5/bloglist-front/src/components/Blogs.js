import React from 'react'
import Blog from './Blog'

export default ({ blogs }) => {
  return (
    <div className="blogs">
      <h2>Blogs</h2>
      {
        blogs.map(blog =>
        <Blog key={blog._id} blog={blog}/>
        )
      }
    </div>
  )
}
