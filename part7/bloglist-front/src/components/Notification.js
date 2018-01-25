import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {

  render() {
    return (
      <div className={`notification ${this.props.notification.error ? 'error' : 'success'}`} >{this.props.notification.message}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, null)(Notification)
