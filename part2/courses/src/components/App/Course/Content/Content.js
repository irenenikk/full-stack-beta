import React from 'react'

import ContentTitle from './ContentTitle'
import Part from './Part'

export default ({ content }) => {
  return (
    <div>
    <ContentTitle title="Sisältö" />
    <ul>
    {
      content.map(c => {
        return (
              <Part key={c.part} name={c.part} exercises={c.exercises}/>
        )
      })
    }
    </ul>
    </div>
  )
}
