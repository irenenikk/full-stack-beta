import React from 'react'

export default ({ blog, toggleShowFullInfo }) => {
  return (
    <div className="blog" onClick={toggleShowFullInfo}>
      <span className="blog-title">
        {blog.title}
      </span>
      <span className="blog-author" >
        {` by ${blog.author}`}
      </span>
    </div>
  )
}
