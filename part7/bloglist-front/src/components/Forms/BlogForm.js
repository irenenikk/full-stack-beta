import React from 'react'
import { connect } from 'react-redux'
import { submitBlog } from '../../state/actions/formActions'

class BlogForm extends React.Component {

  render() {
    return (
      <div className="new-blog-form" >
        <h2>New blog</h2>
        <form onSubmit={this.props.submitBlog}>
          <div>
            Title
            <input
              name="title"
            />
          </div>
          <div>
            Address
            <input
              name="url"
            />
          </div>
          <div>
            Author
            <input
              name="author"
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
}

const mapDispatchToProps = {
  submitBlog
}

export default connect(null, mapDispatchToProps)(BlogForm)
