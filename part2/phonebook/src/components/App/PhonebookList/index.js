import React from 'react'

import Person from './person'

export default ({ persons }) => {
  if (persons.length === 0) {
    return null
  }
  return (
    <table>
      <tbody>
        {
          persons.map(p => <Person key={p.name} person={p} />)
        }
      </tbody>
    </table>
  )
}
