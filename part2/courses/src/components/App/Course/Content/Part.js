import React from 'react'

export default ({ name, exercises }) => {
  return (
    <li>
      {name}: {exercises}
    </li>
  )
}
