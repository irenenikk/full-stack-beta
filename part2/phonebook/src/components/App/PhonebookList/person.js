import React from 'react'

export default ({ person, onDeletePerson }) => {
  return (
    <tr>
      <td>{person.name}:</td>
      <td>{person.number}</td>
      <td><button onClick={() => onDeletePerson(person)} >delete</button></td>
    </tr>
  )
}
