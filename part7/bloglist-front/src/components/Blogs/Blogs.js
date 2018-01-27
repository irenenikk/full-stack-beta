import React from 'react'
import ModestBlog from './ModestBlog'

export default ({ blogs }) => {
  return (
    <div className="list">
      <h2>Blogs</h2>
      {
        blogs
          .sort((b1, b2) => b2.likes - b1.likes)
          .map(blog =>
            <ModestBlog
              key={blog._id}
              blog={blog}
            />
          )
      }
    </div>
  )
}


