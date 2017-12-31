import React from 'react'

export default ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
    >
    {text}
    </button>
  )
}
