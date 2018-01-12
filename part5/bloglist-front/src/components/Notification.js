import React from 'react'

export default ({ notification }) => {
  return (
    <div className={`notification ${notification.error ? 'error' : 'success'}`} >{notification.message}</div>
  )
}
