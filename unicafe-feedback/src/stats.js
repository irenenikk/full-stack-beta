import React from 'react'

export default ({ feedback }) => {
  return (
    <ul>
    {
      feedback.map(f => {
        return <li key={f.attribute} >{f.attribute}: {f.counter}</li>
      })
    }
    </ul>
  )
}
