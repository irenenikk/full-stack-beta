import React from 'react'

export default ({ feedback }) => {
  let average = 0;
  if (feedback.length > 0) {
    average = feedback.reduce((a, c) => a + c.value * c.counter, 0) / feedback.length
  }
  return (
    <tr><td>Keskiarvo:</td><td>{average}</td></tr>
  )
}
