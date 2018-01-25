import React from 'react'
import FancyBlog from './FancyBlog'
import ModestBlog from './ModestBlog'
import PropTypes from 'prop-types'

export default class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showFullInfo: false }
  }

  toggleShowFullInfo = () => {
    this.setState({ showFullInfo: !this.state.showFullInfo })
  }

  render() {
    return (
      <div className="blog ">
        {
          this.state.showFullInfo ?
            <FancyBlog blog={this.props.blog} toggleShowFullInfo={this.toggleShowFullInfo} showDelete={this.props.showDelete}/>
            :
            <ModestBlog blog={this.props.blog} toggleShowFullInfo={this.toggleShowFullInfo}/>
        }
      </div>
    )
  }
}

Blog.propTypes = {
  showDelete: PropTypes.bool,
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
    user: PropTypes.object
  })
}
