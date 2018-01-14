import React from 'react'

export default ({ blog, toggleShowFullInfo, onLike, showDelete, handleDelete }) => {
    return (
        <div>
            <h3 onClick={toggleShowFullInfo}>
                {blog.title}
            </h3>
            <h4> by {blog.author}</h4>
            <a href={blog.url}>LINK</a>
            <div className="blog-likes" >Likes: {blog.likes}</div>
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
                blog.user &&
        <div>Created by {blog.user.username}</div>
            }
            {
                showDelete &&
        <button onClick={() => handleDelete(blog)}>Delete</button>
            }
        </div>
    )
}
