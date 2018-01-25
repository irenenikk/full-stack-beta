import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleBlogLike, handleDeleteBlog } from '../../state/actions/blogActions'

class FancyBlog extends React.Component {
  render() {
    return (
      <div>
        <h3 onClick={this.props.toggleShowFullInfo}>
          {this.props.blog.title}
        </h3>
        <h4> by {this.props.blog.author}</h4>
        <a href={this.props.blog.url}>LINK</a>
        <div className="blog-likes" >Likes: {this.props.blog.likes}</div>
        <button
          className="blog-like-button"
          onClick={(e) => {
            e.preventDefault()
            this.props.onLike({ ...this.props.blog, likes: this.props.blog.likes + 1 })
          }}
        >
                Like
        </button>
        {
          this.props.blog.user &&
            <div>Created by {this.props.blog.user.username}</div>
        }
        {
          this.props.showDelete &&
            <button onClick={() => handleDeleteBlog(this.props.blog)}>Delete</button>
        }
      </div>
    )
  }
}

FancyBlog.propTypes = {
  onLike: PropTypes.func,
  handleDelete: PropTypes.func,
  showDelete: PropTypes.bool,
  toggleShowFullInfo: PropTypes.func,
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
    user: PropTypes.object
  })
}

const mapDispatchToProps = {
  handleBlogLike,
  handleDeleteBlog
}

export default connect(null, mapDispatchToProps)(FancyBlog)
