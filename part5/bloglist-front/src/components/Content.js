import React from 'react'
import Blogs from './Blogs'
import BlogForm from './BlogForm'
import UserInfo from './UserInfo'

export default ({
    user,
    blogs,
    onLogout,
    handleNewBlogFieldChange,
    newBlog,
    handleNewBlogSubmit
  }) => {
  return (
    <div>
      <UserInfo user={user} onLogout={onLogout} />
      <BlogForm
        handleNewBlogFieldChange={handleNewBlogFieldChange}
        newBlog={newBlog}
        handleNewBlogSubmit={handleNewBlogSubmit}
      />
      <Blogs blogs={blogs} />
    </div>
  )
}
