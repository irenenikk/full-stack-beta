import React from 'react'

const styles = {
  padding: '0.5rem',
  color: 'green',
}

export default ({ notification }) => {
  if (!notification) {
    return null
  }
  return <div style={styles} >{notification}</div>
}
