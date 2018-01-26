import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleBlogLike, handleDeleteBlog } from '../../state/actions/blogActions'

class FancyBlog extends React.Component {


    showDelete = () => {
      return (!this.props.element.user ||
        this.props.currentUser.username === this.props.element.user.username)
    }

    handleDelete = () => {
      this.props.history.push('/')
      this.props.handleDeleteBlog(this.props.element)
    }

    render() {
      return (
        <div>
          <h3 onClick={this.props.toggleShowFullInfo}>
            {this.props.element.title}
          </h3>
          <h4> by {this.props.element.author}</h4>
          <a href={this.props.element.url}>LINK</a>
          <div className="blog-likes" >Likes: {this.props.element.likes}</div>
          <button
            className="blog-like-button"
            onClick={(e) => {
              e.preventDefault()
              this.props.handleBlogLike({ ...this.props.element, likes: this.props.element.likes + 1 })
            }}
          >
                Like
          </button>
          {
            this.props.element.user &&
            <div>Created by {this.props.element.user.username}</div>
          }
          {
            this.showDelete &&
            <button onClick={this.handleDelete}>Delete</button>
          }
        </div>
      )
    }
}

FancyBlog.propTypes = {
  onLike: PropTypes.func,
  handleDelete: PropTypes.func,
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
