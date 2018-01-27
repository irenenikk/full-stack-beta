import React from 'react'

export default class Togglable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div className="togglable">
        <div className={this.state.visible? 'invisible' : ''}>
          <button onClick={this.toggleVisibility}>{this.props.buttonLabel}</button>
        </div>
        <div className={this.state.visible? '' : 'invisible'}>
          {this.props.children}
          <button
            onClick={this.toggleVisibility}
            className="danger"
          >
          &#x2716;
          </button>
        </div>
      </div>
    )
  }
}
