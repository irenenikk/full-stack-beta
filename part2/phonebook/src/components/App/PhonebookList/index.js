import React from 'react'

import Person from './person'

export default ({ persons, onDeletePerson }) => {
  if (persons.length === 0) {
    return null
  }
  return (
    <table>
      <tbody>
        {
          persons.sort(byId).map(p => <Person key={p.name} person={p} onDeletePerson={onDeletePerson}/>)
        }
      </tbody>
    </table>
  )
}

const byId = (p1, p2) => p1.id - p2.id
