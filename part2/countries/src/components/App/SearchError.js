import React from 'react'

export default ({ error }) => {
  if (error === '') {
    return null
  }
  return (
    <div>
      <div>{error} :(</div>
      <div>Try again later!</div>
    </div>
  )
}
