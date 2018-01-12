import React from 'react'

export default ({ blog, toggleShowFullInfo, onLike }) => {
  return (
    <div className="fancy-blog">
      <h3 onClick={toggleShowFullInfo}>
        {blog.title}
      </h3>
      <h4> by {blog.author}</h4>
      <a href={blog.url}>LINK</a>
      <div>Likes: {blog.likes}</div>
      <button
        onClick={(e) => {
          e.preventDefault()
          onLike({ ...blog, likes: blog.likes + 1 })
        }}
      >
        Like
      </button>
      {
        blog.user &&
        <div>Created by {blog.user.username}</div>
      }
    </div>
  )
}
