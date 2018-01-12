import React from 'react'

export default ({ handleNewBlogFieldChange, newBlog, handleNewBlogSubmit }) => {
  return (
    <div className="new-blog-form" >
      <h2>New blog</h2>
      <form onSubmit={handleNewBlogSubmit}>
        <div>
          Title
          <input
            type="text"
            value={newBlog.blogTitleField}
            name="title"
            onChange={handleNewBlogFieldChange}
          />
        </div>
        <div>
          Address
          <input
            type="text"
            value={newBlog.blogUrlField}
            name="url"
            onChange={handleNewBlogFieldChange}
          />
        </div>
        <div>
          Author
          <input
            type="text"
            value={newBlog.blogAuthorField}
            name="author"
            onChange={handleNewBlogFieldChange}
          />
        </div>
        <button
          type="submit"
        >
          Submit blog
        </button>
      </form>
    </div>
  )
}
