import React from 'react'

export default ({ notification }) => {
  if (!notification.message) {
    return null
  }
  return <div className={notification.error? "error" : "success"}>{notification.message}</div>
}
