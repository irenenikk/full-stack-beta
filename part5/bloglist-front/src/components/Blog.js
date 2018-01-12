import React from 'react'

export default ({ blog }) => {
  return (
    <div>{blog.author}: {blog.title}</div>
  )
}
