import React from 'react'

export default ({ text, value, onChange }) => {
  return (
    <div>
      {text}: <input
                type="text"
                value={value}
                onChange={onChange}
                />
    </div>
  )
}
