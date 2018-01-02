import React from 'react'

export default ({ name, value, onChange }) => {
  return (
    <div>
      {name}:
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
    </div>
  )
}
