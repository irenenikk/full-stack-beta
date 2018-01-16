import React from 'react'
import { connect } from 'react-redux'

const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1
}

class Notification extends React.Component {
  render() {
    if (!this.props.message) {
      return null
    }
    return (
      <div style={style}>
        {this.props.message}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
  }
}

export default connect(mapStateToProps, null)(Notification)
