import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'

class Blogs extends React.Component  {

  render() {
    return (
      <div className="blogs">
        <h2>Blogs</h2>
        {
          this.props.blogs
            .sort((b1, b2) => b2.likes - b1.likes)
            .map(blog =>
              <Blog
                showDelete={!blog.user || this.props.currentUser.username === blog.user.username}
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



