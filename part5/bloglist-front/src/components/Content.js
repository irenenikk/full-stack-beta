import React from 'react'
import Blogs from './Blogs/Blogs'
import BlogForm from './Forms/BlogForm'
import UserInfo from './UserInfo'
import Togglable from './Togglable'

export default ({
    user,
    blogs,
    onLogout,
    handleNewBlogFieldChange,
    newBlog,
    handleNewBlogSubmit,
    onLike
  }) => {
  return (
    <div>
      <UserInfo user={user} onLogout={onLogout} />
      <Togglable buttonLabel="New Blog">
        <BlogForm
          handleNewBlogFieldChange={handleNewBlogFieldChange}
          newBlog={newBlog}
          handleNewBlogSubmit={handleNewBlogSubmit}
        />
      </Togglable>
      <Blogs blogs={blogs} onLike={onLike}/>
    </div>
  )
}
