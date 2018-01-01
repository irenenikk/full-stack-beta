import React from 'react'

export default ({ person }) => {
  return (
    <tr>
      <td>{person.name}:</td><td>{person.phoneNumber}</td>
    </tr>
  )
}
