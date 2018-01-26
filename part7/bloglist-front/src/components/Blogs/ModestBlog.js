import React from 'react'
import { Link } from 'react-router-dom'

export default ({ blog }) => {
  return (
    <div className="blog">
      <Link key={blog._id} to={`/blogs/${blog._id}`}>
        <span className="blog-title">
          {blog.title}
        </span>
      </Link>
      <span className="blog-author" >
        {` by ${blog.author}`}
      </span>
    </div>
  )
}
