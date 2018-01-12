import React from 'react'

export default ({ blog }) => {
  return (
    <div>
      <a href={blog.url}>{blog.title}</a>
      <span> by {blog.author}</span>
    </div>
  )
}
