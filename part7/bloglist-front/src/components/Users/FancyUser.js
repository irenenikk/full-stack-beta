import React from 'react'

export default ({ element }) => {
  if (!element) {
    return null
  }
  return (
    <div>
      <h2>{element.name}</h2>
      <h3>{element.username}</h3>
      <h4>with {element.blogs.length} blogs</h4>
      {
        element.blogs.length > 0 &&
        element.blogs.map(b => <div key={`${b.title}-${b.author}`}>{b.title}</div>)
      }
    </div>
  )
}
