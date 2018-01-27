import React from 'react'
import ModestBlog from '../Blogs/ModestBlog'

export default ({ element }) => {
  if (!element) {
    return null
  }
  return (
    <div>
      <div className="title-wrapper">
        <div className="big-title">{element.name}</div>
        <div className="fancy-username" >{element.username}</div>
      </div>
      <div>has created {element.blogs.length} blogs</div>
      {
        element.blogs.length > 0 &&
        element.blogs.map(b => <div className="list-item" key={b._id}><ModestBlog blog={b} /></div>)
      }
    </div>
  )
}
