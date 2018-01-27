import React from 'react'
import { connect } from 'react-redux'
import { submitBlog } from '../../state/actions/formActions'

class BlogForm extends React.Component {

  render() {
    return (
      <div>
        <h2>New blog</h2>
        <form onSubmit={this.props.submitBlog}>
          <div className="new-blog-form-item" >
            <input
              placeholder="Title"
              name="title"
            />
          </div>
          <div className="new-blog-form-item">
            <input
              placeholder="Address"
              name="url"
            />
          </div>
          <div className="new-blog-form-item">
            <input
              placeholder="Author"
              name="author"
            />
          </div>
          <button
            className="new-blog-form-item"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  submitBlog
}

export default connect(null, mapDispatchToProps)(BlogForm)
