import React from 'react'

export default ({ content }) => {
  return (
    <div>
    {
      content.map(c => {
        return (
          <p key={`${c.part}-${c.exercises}`}>
            {c.part} {c.exercises}
          </p>
        )
      })
    }
    </div>
  )
}
