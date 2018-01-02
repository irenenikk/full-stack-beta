import React from 'react'

export default ({ text, onSubmit }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
    >
      {text}
    </button>
  )
}
