import React from 'react'

export default ({ onLike, blog, onDelete, showDelete }) => {
  return (
    <div>
      <button
        className="blog-like-button"
        onClick={(e) => {
          e.preventDefault()
          onLike({ ...blog, likes: blog.likes + 1 })
        }}
      >
            Like
      </button>
      {
        showDelete &&
            <button className="danger" onClick={onDelete}>
                Delete
            </button>
      }
    </div>
  )
}
