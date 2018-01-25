import React from 'react'
import Blogs from './Blogs/Blogs'
import BlogForm from './Forms/BlogForm'
import UserInfo from './UserInfo'
import Togglable from './Togglable'

export default () => {
  return (
    <div>
      <UserInfo />
      <Togglable buttonLabel="New Blog">
        <BlogForm />
      </Togglable>
      <Blogs />
    </div>
  )
}
