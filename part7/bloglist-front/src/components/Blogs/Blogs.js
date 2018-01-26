import React from 'react'
import { connect } from 'react-redux'
import ModestBlog from './ModestBlog'

class Blogs extends React.Component  {

  render() {
    return (
      <div className="list">
        <h2>Blogs</h2>
        {
          this.props.blogs
            .sort((b1, b2) => b2.likes - b1.likes)
            .map(blog =>
              <ModestBlog
                key={blog._id}
                blog={blog}
              />
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    currentUser: state.session
  }
}

export default connect(mapStateToProps, null)(Blogs)



