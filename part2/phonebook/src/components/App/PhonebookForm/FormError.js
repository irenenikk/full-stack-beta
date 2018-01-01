import React from 'react'

export default ({ message }) => {
  if (message === '') {
    return null
  }
  return <div>{message}</div>
}
