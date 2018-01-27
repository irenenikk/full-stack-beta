import React from 'react'
import { Link } from 'react-router-dom'

export default ({ blog }) => {
  return (
    <div>
      <Link key={blog._id} to={`/blogs/${blog._id}`}>
        {blog.title}
      </Link>
      <div className="blog-author" >
        {` ${blog.author}`}
      </div>
    </div>
  )
}
