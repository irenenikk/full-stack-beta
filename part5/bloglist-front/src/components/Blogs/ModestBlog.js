import React from 'react'

export default ({ blog, toggleShowFullInfo }) => {
  return (
      <div onClick={toggleShowFullInfo}>
      {blog.title} by {blog.author}
    </div>
  )
}
