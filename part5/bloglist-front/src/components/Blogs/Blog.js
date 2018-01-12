import React from 'react'
import FancyBlog from './FancyBlog'
import ModestBlog from './ModestBlog'

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
          <FancyBlog blog={this.props.blog} toggleShowFullInfo={this.toggleShowFullInfo} onLike={this.props.onLike}/>
          :
          <ModestBlog blog={this.props.blog} toggleShowFullInfo={this.toggleShowFullInfo}/>
        }
      </div>
    )
  }

}
