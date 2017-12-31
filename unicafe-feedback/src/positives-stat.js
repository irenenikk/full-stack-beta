import React from 'react'

export default ({ feedback }) => {
  let positives = 0
  let total = 0;
  feedback.forEach(f => {
    if (f.value > 0 && f.counter > 0) {
      positives += f.counter
    }
    total += f.counter
  })
  if (total === 0) {
    return null
  }
  return (
    <tr><td>Positiivisia</td><td>{(positives / total)*100}%</td></tr>
  )
}
