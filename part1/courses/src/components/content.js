import React from 'react'

import Part from './part'

export default ({ content }) => {
  return (
    <div>
    {
      content.map(c => {
        return (
          <Part name={c.part} exercises={c.exercises}/>
        )
      })
    }
    </div>
  )
}
