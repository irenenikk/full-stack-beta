import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleBlogLike, handleDeleteBlog } from '../../state/actions/blogActions'
import BlogButtons from './BlogButtons'

class FancyBlog extends React.Component {


    showDelete = () => {
      return (!this.props.element.user ||
        this.props.currentUser.username === this.props.element.user.username)
    }

    handleDelete = (e) => {
      e.preventDefault()
      this.props.handleDeleteBlog(this.props.element)
      this.props.history.push('/#/blogs')
    }

    render() {
      if (!this.props.element) {
        return null
      }
      return (
        <div>
          <div className="title-wrapper">
            <div className="big-title">
              {this.props.element.title}
            </div>
            <div> by {this.props.element.author}</div>
          </div>
          <div >Likes: {this.props.element.likes}</div>
          <BlogButtons
            onLike={this.props.handleBlogLike}
            blog={this.props.element}
            onDelete={this.handleDelete}
            showDelete={this.showDelete()}
          />
          <div className="view-page">
            <a
              href={this.props.element.url}
              className="link"
            >
              View page
            </a>
          </div>
          {
            this.props.element.user &&
            <div className="subtitle">Created by {this.props.element.user.username}</div>
          }
        </div>
      )
    }
}

FancyBlog.propTypes = {
  onLike: PropTypes.func,
  handleDelete: PropTypes.func,
  toggleShowFullInfo: PropTypes.func,
  element: PropTypes.shape({
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
