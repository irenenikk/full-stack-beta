import React from 'react'
import Blog from './Blog'

export default ({ blogs, onLike, currentUser, handleDelete }) => {
    return (
        <div className="blogs">
            <h2>Blogs</h2>
            {
                blogs
                    .sort((b1, b2) => b2.likes - b1.likes)
                    .map(blog =>
                        <Blog
                            showDelete={!blog.user || currentUser.username === blog.user.username}
                            key={blog._id}
                            blog={blog}
                            onLike={onLike}
                            handleDelete={handleDelete}
                        />
                    )
            }
        </div>
    )
}
