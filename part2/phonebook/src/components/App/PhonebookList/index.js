import React from 'react'

import Person from './person'

export default ({ persons }) => {
  return (
    <div>
      <ul>
        {
          persons.map(p => <Person key={p.name} person={p} />)
        }
      </ul>
    </div>
  )
}
